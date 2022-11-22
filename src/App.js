import {Route, Routes } from "react-router-dom";
import AccountHealth from "./pages/accounthealth";
import CategorisList from "./pages/catagorislist";
import CatagorisUpdate from "./pages/catagorisupdate";
import ContactUs from "./pages/contactus";
import Customer from "./pages/customer";
import CustomersList from "./pages/customerlist";
import FileManager from "./pages/filemanager";
import FinanceOverview from "./pages/financeoverview";
import HelpeCente from "./pages/helpecenter";
import Home from "./pages/home";
import OrderList from "./pages/orderlist";
import ProductList from "./pages/productlist";
import ProductRetun from "./pages/productretun";
import ProductUpdate from "./pages/productupdata";
import SellarDocument from "./pages/sellardocument";
import Transection from "./pages/transaction";


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="Product-list" element={<ProductList />}  />
      <Route path="Product-Uplode" element={<ProductUpdate />}  />
      <Route path="Categoris-list" element={<CategorisList />}  />
      <Route path="Categoris-Uplode" element={<CatagorisUpdate />}  />
      <Route path="Customers-list" element={<CustomersList />}  />
      <Route path="Customers" element={<Customer />}  />
      <Route path="File-Manager" element={<FileManager />}  />
      <Route path="Order-List" element={<OrderList />} />
      <Route path="Product-Return" element={<ProductRetun />}  />
      <Route path="Transection" element={<Transection />}  />
      <Route path="Finance-Overview" element={<FinanceOverview />}  />
      {/* <Route path="Order-Overview" element={<OrderList />}  /> */}
      <Route path="Contact-US" element={<ContactUs />}  />
      <Route path="Helpe-Center" element={<HelpeCente />}  />
      <Route path="Account-Health" element={<AccountHealth />}  />
      <Route path="Sellar-Document" element={<SellarDocument />}  />
      {/* <Route path="*" element={<none />}  /> */}
    </Routes>
  );
}

export default App;
