import "../../styles/globals.css"
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className='bg-gray-100'>
		{children}
		</body>
    </html>
  )
}
