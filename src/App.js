import { AnimatePresence } from "framer-motion";
import { Redirect, Route, Switch, useLocation } from "react-router";
import Layout from "./components/Layout/Layout";
import BackToTop from "./helpers/BackToTop";
import ScrollToTop from "./helpers/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <BackToTop />
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/courses">
            <CoursesPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/notfound">
            <NotFoundPage />
          </Route>
          <Route path="*">
            <Redirect to="/notfound" />
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
