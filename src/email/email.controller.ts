import { Body, Controller, Post } from '@nestjs/common'
import { EmailService } from './email.service'
import { EmailData } from './model/email.model'

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) { }

  @Post('send')
  async sendEmail(@Body() emailData: EmailData): Promise<string> {
    const result = await this.emailService.sendEmail(emailData)
    return result
  }
}