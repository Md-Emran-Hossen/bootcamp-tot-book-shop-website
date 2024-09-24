export const ROUTES={
    HOME: "/",
    FAQ: "/faq",
    ABOUT: "/about",
    BLOG: "/blog",
    BOOKS: "/books",
    SINGLE_BOOKS: {
        STATIC: "/book/:bookId",
        DYNAMIC: (bookId)=>`/book/${bookId}`,
    },
};