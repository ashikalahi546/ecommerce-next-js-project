import Arrival from "@/components/Arrival";
import Categories from "@/components/Categories";
import Categoris from "@/components/Categoris";
import FlashSalesCard from "@/components/FlashSalesCard";
import Footer from "@/components/Footer";

import Products from "@/components/Products";
import SellingProducts from "@/components/SellingProducts";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <div className="w-[1170px] mx-auto ">
        <Sidebar />
        <FlashSalesCard />
        <Categoris />
        <SellingProducts />
        <Categories />
        <Products />
        {/* <Arrival />  */}
      </div>
      <Footer />
    </main>
  );
}
