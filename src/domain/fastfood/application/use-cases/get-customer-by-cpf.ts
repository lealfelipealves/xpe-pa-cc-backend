import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { CustomerRepository } from '@/domain/fastfood/application/repositories/customer-repository'
import { Customer } from '@/domain/fastfood/enterprise/entities'
import { Injectable } from '@nestjs/common'

interface GetCustomerByCpfUseCaseRequest {
  cpf: string
}

type GetCustomerByCpfUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    customer: Customer | null
  }
>

@Injectable()
export class GetCustomerByCpfUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute({
    cpf
  }: GetCustomerByCpfUseCaseRequest): Promise<GetCustomerByCpfUseCaseResponse> {
    const customer = await this.customerRepository.findByCpf(cpf)

    if (!customer) {
      return left(new ResourceNotFoundError())
    }

    let auth = null

    try {
      const response = await fetch(
        'https://ogrof4g0fi.execute-api.us-east-1.amazonaws.com/auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cpf: cpf
          })
        }
      )

      if (!response.ok) {
        throw new Error('Failed to auth customer')
      }

      auth = await response.json()

      console.log('GetCustomerByCpfUseCase', auth)
    } catch (error) {
      console.error('GetCustomerByCpfUseCase', error)
    }

    return right({
      customer,
      auth
    })
  }
}
