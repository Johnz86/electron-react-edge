export enum IconTypes {
  ARROW = "arrow",
  CHAT = "chat",
  CLOSE = "close",
  DOTS = "dots",
  FOLDER = "folder",
  GEAR = "gear",
  LOGOUT = "logout",
  MAXIMIZE = "maximize",
  MINIMIZE = "minimize",
  OFFLINE = "offline",
  PAUSE = "pause",
  PLAY = "play",
  REPAIR = "repair",
  USER = "user"
}

export const icons = {
  [IconTypes.ARROW]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path fill="var(--color-lighten-primary)" d="M55.9 43c.1-.1.1-.2.2-.3 0-.1.1-.1.1-.2v-.1c0-.1.1-.2.1-.3 0-.1 0-.2.1-.2v-1.4c0-.1 0-.2-.1-.2 0-.1 0-.2-.1-.3v-.1c0-.1-.1-.1-.1-.2s-.1-.2-.1-.2v-.1c0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-8.3-9.6c-1.1-1.2-2.9-1.3-4-.1s-1.2 3.1-.1 4.4l3.8 4.3H18.7c-1.6 0-2.8 1.4-2.8 3.1 0 1.7 1.3 3.1 2.8 3.1H47l-3.8 4.3c-1.1 1.2-1 3.2.1 4.4 1.1 1.2 2.9 1.1 4-.1l8.3-9.6c0-.1.1-.1.1-.2.1.1.1.1.2 0z"/><path fill="#fff" stroke="#fff" stroke-width="3" d="M39.7 2.5c20.8 0 37.7 16.9 37.7 37.7C77.4 61.1 60.5 78 39.7 78 18.9 78 2 61.1 2 40.3 2 19.5 18.9 2.5 39.7 2.5m0-2C17.8.5 0 18.3 0 40.3 0 62.2 17.8 80 39.7 80c21.9 0 39.7-17.8 39.7-39.7C79.4 18.3 61.6.5 39.7.5z"/></svg>`,
  [IconTypes.CHAT]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M73.2 9.1c-3-3-7.2-4.9-11.8-4.9H18.5C14 4.2 9.8 6.1 6.8 9.1c-3 3-4.9 7.2-4.9 11.8v24.3c0 4.6 1.9 8.8 4.9 11.8 3 3 7.2 4.9 11.8 4.9h4.9v11c0 1.2.7 2.2 1.7 2.7s2.3.4 3.2-.4l16.5-13.3h16.7c4.6 0 8.8-1.9 11.8-4.9 3-3 4.9-7.2 4.9-11.8V20.8c-.2-4.5-2.1-8.7-5.1-11.7zm-1.1 36.1c0 2.9-1.2 5.6-3.1 7.5-1.9 1.9-4.6 3.1-7.5 3.1H43.7c-.7 0-1.4.2-1.9.7l-12.4 10v-7.7c0-.8-.3-1.6-.9-2.1-.6-.6-1.3-.9-2.1-.9h-7.9c-2.9 0-5.6-1.2-7.5-3.1-1.9-1.9-3.1-4.6-3.1-7.5V20.8c0-2.9 1.2-5.6 3.1-7.5 1.9-1.9 4.6-3.1 7.5-3.1h42.9c2.9 0 5.6 1.2 7.5 3.1 1.9 1.9 3.1 4.6 3.1 7.5v24.4z"/></svg>`,
  [IconTypes.CLOSE]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
  [IconTypes.DOTS]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="20.1" cy="40" r="5.1"/><circle cx="40" cy="40" r="5.1"/><circle cx="59.9" cy="40" r="5.1"/></svg>`,
  [IconTypes.FOLDER]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M61.3 60.2H20.1c-2.9 0-5.2-2.3-5.2-5.2V25.1c0-2.9 2.3-5.2 5.2-5.2h16.6c1.4 0 2.8.6 3.8 1.6l6.9 6.9c1 1 2.4 1.6 3.8 1.6h10c2.9 0 5.2 2.3 5.2 5.2V55c.1 2.8-2.2 5.2-5.1 5.2z"/></svg>`,
  [IconTypes.GEAR]: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>`,
  [IconTypes.LOGOUT]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M41.3 70H20.6c-1.4 0-2.7-.6-3.7-1.5-.9-.9-1.5-2.2-1.5-3.7V15.2c0-1.4.6-2.7 1.5-3.7.9-.9 2.2-1.5 3.7-1.5h20.7c1.7 0 3-1.3 3-3s-1.3-3-3-3H20.6c-3.1 0-5.9 1.3-7.9 3.3-2 2-3.3 4.8-3.3 7.9v49.6c0 3.1 1.3 5.9 3.3 7.9 2 2 4.8 3.3 7.9 3.3h20.7c1.7 0 3-1.3 3-3s-1.4-3-3-3z"/><path d="M76.1 39.2c0-.2 0-.4-.1-.6 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.2-.1-.2-.2-.3-.4-.5L63.9 25.8c-1.2-1.2-3.1-1.2-4.2 0s-1.2 3.1 0 4.2l6.2 6.2H32.7c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.9l-7 7c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l11.3-11.3c.7-.7 1-1.6.8-2.5.2-.1.2-.2.2-.4z"/></svg>`,
  [IconTypes.MAXIMIZE]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`,
  [IconTypes.MINIMIZE]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h12v2H6z"/></svg>`,
  [IconTypes.OFFLINE]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M43 43.1l-4.4 4.4-5.9-5.9 4.4-4.4c1.2-1.2 1.2-3.1 0-4.2s-3.1-1.2-4.2 0l-4.4 4.4-2.6-2.6c-.7-.7-1.8-.6-2.4.1-4.1 5.2-4.3 12.5-.4 17.9L7.9 67.9c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l15.2-15.2c5.3 3.2 12.1 2.9 17-1 .7-.6.8-1.7.1-2.4l-1.8-1.8 4.4-4.4c1.2-1.2 1.2-3.1 0-4.2s-2.9-1.2-4 0zM72.1 7.9c-1.2-1.2-3.1-1.2-4.2 0L54.8 21c-5.4-3.7-12.6-3.6-17.8.5-.7.6-.8 1.7-.1 2.4l18.7 18.7c.7.7 1.8.6 2.4-.1 3.9-5 4.2-11.9.9-17.2l13.2-13.2c1.2-1.1 1.2-3 0-4.2z"/></svg>`,
  [IconTypes.PAUSE]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M26.4 69.8h-9.1c-1.9 0-3.4-1.5-3.4-3.4V13.5c0-1.9 1.5-3.4 3.4-3.4h9.1c1.9 0 3.4 1.5 3.4 3.4v52.9c0 1.9-1.6 3.4-3.4 3.4zm36.3 0h-9.1c-1.9 0-3.4-1.5-3.4-3.4V13.5c0-1.9 1.5-3.4 3.4-3.4h9.1c1.9 0 3.4 1.5 3.4 3.4v52.9c0 1.9-1.5 3.4-3.4 3.4z"/></svg>`,
  [IconTypes.PLAY]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M25.2 11.1L60.5 36c2.8 2 2.8 6.1 0 8.1L25.2 68.9c-3.3 2.3-7.8 0-7.8-4.1V15.1c0-4 4.5-6.4 7.8-4z"/></svg>`,
  [IconTypes.REPAIR]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M69.7 23.9c-.2-.9-1.3-1.2-1.9-.6l-7.1 7.1c-1.9 1.9-4.9 1.9-6.7 0L49.6 26c-1.9-1.9-1.9-4.9 0-6.7l7.1-7.1c.6-.6.3-1.7-.6-1.9-1.8-.3-3.6-.4-5.5-.2-7.6 1-13.8 7.1-14.8 14.8-.3 2.6-.1 5.2.7 7.5L12.2 56.7c-3.1 3.1-3.1 8 0 11.1s8 3.1 11.1 0l24.2-24.2c2.3.7 4.9 1 7.5.7 7.6-1 13.8-7.1 14.8-14.8.3-2 .2-3.8-.1-5.6z"/></svg>`,
  [IconTypes.USER]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M63.1 39.2c-1.7-3.7-4.2-6.7-7.1-9 1-2.3 1.6-4.8 1.6-7.4 0-4.9-2-9.3-5.2-12.5C49.3 7 44.9 5 40 5s-9.3 2-12.5 5.2c-3.2 3.2-5.2 7.6-5.2 12.5 0 2.6.6 5.2 1.6 7.4-2.9 2.3-5.3 5.3-7 8.9-2.2 4.5-3.3 10-3.3 16.3 0 4.1.7 7.5 2.2 10.4 1.1 2.1 2.6 3.9 4.4 5.2 2.7 2 5.8 3.1 9.2 3.7 3.4.6 7 .8 10.7.8 3.3 0 6.5-.1 9.6-.6 2.3-.4 4.4-.9 6.5-1.8 1.5-.6 3-1.5 4.2-2.5 1.9-1.6 3.5-3.7 4.5-6.2s1.5-5.5 1.5-8.9c-.1-6.3-1.2-11.8-3.3-16.2zM31.7 14.4c2.1-2.1 5-3.4 8.3-3.4 3.2 0 6.1 1.3 8.3 3.4 2.1 2.1 3.4 5 3.4 8.3 0 3.2-1.3 6.1-3.4 8.3-2.1 2.1-5 3.4-8.3 3.4-3.2 0-6.1-1.3-8.3-3.4-2.1-2.1-3.4-5-3.4-8.3 0-3.2 1.3-6.1 3.4-8.3zm27.1 48.5c-.7 1.3-1.6 2.3-2.6 3.2-1.6 1.2-3.9 2.1-6.6 2.6-2.8.5-6 .7-9.6.7-3.1 0-6.1-.1-8.6-.5-1.9-.3-3.6-.7-5.1-1.3-1.1-.5-2-1-2.8-1.6-1.2-1-2.1-2.1-2.8-3.8-.7-1.7-1.1-3.9-1.1-6.7 0-5.6 1-10.2 2.7-13.7 1.3-2.7 3-4.9 5-6.5l.1.1c3.2 3.2 7.6 5.2 12.5 5.2s9.3-2 12.5-5.2l.1-.1c2 1.7 3.7 3.9 5 6.6 1.7 3.5 2.7 8.1 2.7 13.6.1 3.2-.4 5.6-1.4 7.4z"/></svg>`
};
