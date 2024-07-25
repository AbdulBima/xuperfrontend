import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full w-full overflow-hidden flex-col items-center justify-center p-24">
    <h1 className="text-3xl font-bold">Xaper Frontend</h1>
 
        
          <Link href="/booksales" className="text-blue-500 hover:underline">Book Sales
          </Link>
        
        
          <Link href="/monthlysales" className="text-blue-500 hover:underline">Monthly Sales
          </Link>
        
        
          <Link href="/userspurchases" className="text-blue-500 hover:underline">User Purchases
          </Link>
        
  
  </main>
  );
}
