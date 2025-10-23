import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Login, { loginAction } from "./components/Login/Login.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Home from "./components/Home/Home.jsx";
import ErrorPage from "./components/Error/ErrorPage.jsx";
import { productsLoader } from "./components/Home/Home.jsx";
import { contactAction } from "./components/Contact/Contact.jsx";
import ProductDetail from "./components/Home/products/ProductDetail.jsx";
import { CartProvider } from "./store/cart-context.jsx";
import { AuthProvider } from "./store/auth-context.jsx";
import CheckoutForm from "./components/Checkout/CheckoutForm.jsx";
import ProtectedRoute from "./components/Login/ProtectedRoute.jsx";
import Orders, { ordersLoader } from "./components/Orders/Orders.jsx";
import AdminOrders, {
  adminOrdersLoader,
} from "./components/admin/AdminOrders.jsx";
import Messages, { messagesLoader } from "./components/admin/Messages.jsx";
import Register, { registerAction } from "./components/Register/Register.jsx";
import Profile, {
  profileAction,
  profileLoader,
} from "./components/Profile/Profile.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderSuccess from "./components/Orders/OrderSuccess.jsx";

const stripePromise = loadStripe(
  "pk_test_51RJQvF4PbYqEP0SGCcnUiXIBFtwmjlfv7CvYdwgLRyrs3pLxejSAYED3goAAkxwKVkgP70GvS0LkzhIHWSfpHWYE00jR1SrCza"
);

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={productsLoader} />
    <Route path="/home" element={<Home />} loader={productsLoader} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} action={contactAction} />
    <Route path="/login" element={<Login />} action={loginAction} />
    <Route path="/register" element={<Register />} action={registerAction} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route
        path="/profile"
        element={<Profile />}
        loader={profileLoader}
        action={profileAction}
        shouldRevalidate={({ actionResult }) => {
          return !actionResult?.success;
        }}
      />
      <Route path="/orders" element={<Orders />} loader={ordersLoader} />
      <Route
        path="/admin/orders"
        element={<AdminOrders />}
        loader={adminOrdersLoader}
      />
      <Route
        path="/admin/messages"
        element={<Messages />}
        loader={messagesLoader}
      />
    </Route>
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={appRouter} />
        </CartProvider>
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable
        pauseOnHover
        theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
        transition={Bounce}
      />
    </Elements>
  </StrictMode>
);
