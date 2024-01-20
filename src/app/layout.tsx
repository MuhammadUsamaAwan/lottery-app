import type { Metadata } from 'next';

import { fontSans } from '~/lib/fonts';
import { cn } from '~/lib/utils';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Lottery App',
    template: `%s - Lottery App`,
  },
  description: 'Lottery App',
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  );
}
