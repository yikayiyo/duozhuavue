import { nextTick } from "@vue/runtime-core";
import { createRouter, createWebHashHistory } from "vue-router";
const HomeWrapper = () => import("../pages/HomeWrapper.vue");
const HomePage = () => import("../pages/HomePage.vue");
const Sell = () => import("../pages/Sell.vue");
const SellBook = () => import("../pages/SellBook.vue");
const SellClothing = () => import("../pages/SellClothing.vue");
const SellElectronics = () => import("../pages/SellElectronics.vue");
const Login = () => import("../pages/Login.vue");
const SignUp = () => import("../pages/SignUp.vue");
const Cart = () => import("../pages/Cart.vue");
const User = () => import("../pages/User.vue");
const Book = () => import("../pages/Book.vue");
const BookCategory = () => import("../pages/BookCategory.vue");
const ClothingPage = () => import("../pages/ClothingPage.vue");
const ElectronicsPage = () => import("../pages/ElectronicsPage.vue");
const OriginalPage = () => import("../pages/OriginalPage.vue");
const SearchBook = () => import("../pages/SearchBook.vue");
const SearchBookInfo = () => import("../pages/SearchBookInfo.vue");
const SearchElectronics = () => import("../pages/SearchElectronics.vue");
const SearchClothing = () => import("../pages/SearchClothing.vue");
const OpenCollections = () => import("../pages/OpenCollections.vue");
const OpenCollection = () => import("../pages/OpenCollection.vue");
const BookService = () => import("../pages/BookService.vue");
const Support = () => import("../pages/Support.vue");
const Env = () => import("../pages/Env.vue");
const Activity = () => import("../pages/Activity.vue");
const Comment = () => import("../pages/Comment.vue");
const NewComment = () => import("../pages/NewComment.vue");
const BookShelf = () => import("../pages/BookShelf.vue");
const PageNotFound = () => import("../pages/PageNotFound.vue");

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return {
      top: 0,
      // behavior: "smooth",
    };
  }
};

const routes = [
  {
    path: "/",
    component: HomeWrapper,
    meta: { title: "duozhuavue" },
    children: [
      { path: "", redirect: "/book" },
      { path: "/book", component: HomePage },
      { path: "/clothing", component: ClothingPage },
      { path: "/electronics", component: ElectronicsPage },
      { path: "/original", component: OriginalPage },
    ],
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/sell",
    component: Sell,
    meta: { title: "卖东西 - duozhuavue" },
    children: [
      {
        path: "",
        component: SellBook,
      },
      {
        path: "clothing",
        component: SellClothing,
      },
      {
        path: "electronics",
        component: SellElectronics,
      },
    ],
  },
  { path: "/cart", component: Cart, meta: { title: "购物车 - duozhuavue" } },
  {
    path: "/users/:userId",
    name: "user",
    component: User,
    meta: { title: "我的 - duozhuavue" },
    children: [
      {
        path: "/users/:userId",
        redirect: {
          name: "user.activity",
        },
      },
      {
        path: "activities",
        name: "user.activity",
        component: Activity,
      },
      {
        path: "owning-bookshelf",
        name: "user.bookshelf",
        component: BookShelf,
      },
    ],
  },
  { path: "/books/:bookId", component: Book },
  {
    path: "/book/rating",
    name: "comment",
    component: Comment,
  },
  {
    path: "/book/rating",
    name: "newComment",
    component: NewComment,
  },
  {
    path: "/categories/:categoryId",
    component: BookCategory,
  },
  {
    path: "/search/book",
    component: SearchBook,
  },
  {
    path: "/search/book/:info",
    component: SearchBookInfo,
  },
  {
    path: "/search/clothing",
    component: SearchClothing,
  },
  {
    path: "/search/electronics",
    component: SearchElectronics,
  },
  {
    path: "/search",
    redirect: "/search/book",
  },
  {
    path: "/open-collections",
    component: OpenCollections,
  },
  {
    path: "/open-collections/:id",
    component: OpenCollection,
  },
  {
    path: "/support",
    component: Support,
  },
  {
    path: "/support/book-service",
    component: BookService,
  },
  {
    path: "/support/environmental-exploration",
    component: Env,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior,
});

const DEFAULT_TITLE = "Hire me";

router.afterEach((to, from) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
