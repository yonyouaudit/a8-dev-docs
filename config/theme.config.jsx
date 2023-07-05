export default {
  logo: <span>A8数智化审计平台开发文档</span>,
  // navTheme: "dark",
  project: {
    link: "https://git.yonyouaud.com/a8/frontend.git",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256">
        <path
          fill="currentColor"
          d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
        ></path>
      </svg>
    ),
  },
  search: {
    placeholder: "请输入检索关键字",
    component: null,
  },
  toc: {
    title: <>页内导航</>
  },
  editLink: {
    text: <>编辑此页</>
  },
  feedback: { content: null },
  docsRepositoryBase: "https://git.yonyouaud.com/a8/a8-dev-docs/-/tree/master",
  i18n: [
    // { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://www.yonyouaud.com" target="_blank">
          审友数治
        </a>
      </span>
    ),
  },
  // ...
};
