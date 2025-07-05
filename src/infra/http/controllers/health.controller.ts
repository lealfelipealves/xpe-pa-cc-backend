import { Controller, Get, HttpCode } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

@ApiTags('Health')
@Controller()
export class HealthController {
  constructor(private prisma: PrismaService) {}

  @Get('/health')
  @HttpCode(200)
  @ApiOperation({ summary: 'Health Check' })
  async health() {
    try {
      await this.prisma.$queryRaw`SELECT 1`
      return {
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'xpe-pa-cc-backend'
      }
    } catch {
      return {
        status: 'error',
        timestamp: new Date().toISOString(),
        service: 'xpe-pa-cc-backend',
        error: 'Database connection failed'
      }
    }
  }

  @Get('/liveness')
  @HttpCode(200)
  @ApiOperation({ summary: 'Liveness Probe' })
  async liveness() {
    return {
      status: 'alive',
      timestamp: new Date().toISOString(),
      service: 'xpe-pa-cc-backend'
    }
  }
}
