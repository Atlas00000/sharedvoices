import { prisma } from './prisma';
import { LogLevel } from '@prisma/client';

export class Logger {
  static async logUserActivity(
    userId: string,
    action: string,
    details?: any,
    ipAddress?: string,
    userAgent?: string
  ) {
    try {
      await prisma.activityLog.create({
        data: {
          userId,
          action,
          details: details ? JSON.stringify(details) : null,
          ipAddress,
          userAgent,
        },
      });
    } catch (error) {
      console.error('Failed to log user activity:', error);
    }
  }

  static async logSystemEvent(
    level: LogLevel,
    message: string,
    details?: any
  ) {
    try {
      await prisma.systemLog.create({
        data: {
          level,
          message,
          details: details ? JSON.stringify(details) : null,
        },
      });
    } catch (error) {
      console.error('Failed to log system event:', error);
    }
  }

  static async getUserActivityLogs(
    userId: string,
    page = 1,
    limit = 10
  ) {
    const skip = (page - 1) * limit;
    return prisma.activityLog.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    });
  }

  static async getSystemLogs(
    level?: LogLevel,
    page = 1,
    limit = 10
  ) {
    const skip = (page - 1) * limit;
    return prisma.systemLog.findMany({
      where: level ? { level } : undefined,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    });
  }
} 