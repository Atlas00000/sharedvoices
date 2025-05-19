const { PrismaClient } = require('@prisma/client')
const { hash } = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const email = 'admin@sharedvoices.com'
  const password = 'Admin@123' // You should change this password
  const hashedPassword = await hash(password, 12)

  try {
    const admin = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name: 'Admin User',
        password: hashedPassword,
        role: 'ADMIN',
      },
    })

    console.log('Admin user created successfully:', admin)
  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 