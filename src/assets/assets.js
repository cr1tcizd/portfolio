// Resume
import resume from "./Елисеев Дмитрий.pdf";

// Png
import avatarPng from "./avatar.png";
import generalPng from "./generalPhone.png";
import todolistPng from "./todolist/todolist.png";
import chatAppPng from "./chat-app/chatApp.png";
import onlineStorePng from "./online-store/onlineStore.png";
import onlineStoreAuthorization from "./online-store/authorization.png";

// SVG Icon
import downArrow from "./downArrow.svg?react";
import linkSvg from "./link.svg?react";

// Tech stack
import htmlSvg from "./html5.svg?react";
import cssSvg from "./css3.svg?react";
import jsSvg from "./js.svg?react";
import typescriptSvg from "./typescript.svg?react";
import tailwindSvg from "./tailwindcss.svg?react";
import npmSvg from "./npm.svg?react";
import sassSvg from "./sass.svg?react";
import reduxSvg from "./redux.svg?react";
import reactSvg from "./react.svg?react";

// Social
import telegramSvg from "./social/telegram.svg?react";
import vkSvg from "./social/vk.svg?react";
import googleSvg from "./social/google.svg?react";
import githubSvg from "./social/github.svg?react";

export const assets = {
  avatarPng,
  htmlSvg,
  cssSvg,
  jsSvg,
  typescriptSvg,
  tailwindSvg,
  npmSvg,
  sassSvg,
  reduxSvg,
  telegramSvg,
  vkSvg,
  googleSvg,
  githubSvg,
  generalPng,
  todolistPng,
  downArrow,
  resume,
  chatAppPng,
  linkSvg,
  onlineStoreAuthorization,
};

export const skills = [
  {
    photo: jsSvg,
    name: "JavaScript",
  },
  {
    photo: typescriptSvg,
    name: "TypeScript",
  },
  {
    photo: htmlSvg,
    name: "HTML 5",
  },
  {
    photo: cssSvg,
    name: "CSS",
  },
  {
    photo: sassSvg,
    name: "Sass",
  },
  {
    photo: tailwindSvg,
    name: "Tailwind",
  },
  {
    photo: reactSvg,
    name: "React",
  },
  {
    photo: npmSvg,
    name: "NPM",
  },
  {
    photo: reduxSvg,
    name: "Redux",
  },
];

export const works = [
  {
    photo: [todolistPng],
    name: "TODO LIST",
    descr:
      "Todo List клон Google Keeps, реализованы функции создания заметок, редактирование, смена фона и возможность перетаскивания (drag and drop).",
    skills: skills.filter(
      (item) =>
        item.name === "JavaScript" ||
        item.name === "HTML 5" ||
        item.name === "CSS" ||
        item.name === "React",
    ),
    href: "https://github.com/cr1tcizd/todo-list",
  },
  {
    photo: [chatAppPng],
    name: "MESSENGER",
    descr:
      "Приложение обмена мгновенными сообщениями. Возможность отправки фотографий, смена фотографии пользователя, добавление и удаление контактов. Регистрация и авторизация производится с помощью Google. В процессе работы над проектом познакомился с базой данных реального времени Firebase а также научился писать стили с использованием препроцессора SCSS",
    skills: skills.filter(
      (item) =>
        item.name === "JavaScript" ||
        item.name === "HTML 5" ||
        item.name === "Sass" ||
        item.name === "React",
    ),
    href: "https://github.com/cr1tcizd/chat-app",
  },
  {
    photo: [onlineStorePng, onlineStoreAuthorization],
    name: "ONLINE STORE",
    descr:
      "Онлайн магазин с собственной базой данных. Реализована регистрация и логин, фильтрация по типу и бренду устройств, а также можно менять тему. В ходе работы над проектом был базово изучен TypeScript и Tailwind CSS.",
    skills: skills.filter(
      (item) =>
        item.name === "TypeScript" ||
        item.name === "HTML 5" ||
        item.name === "Tailwind" ||
        item.name === "React",
    ),
    href: "https://github.com/cr1tcizd/online-store",
  },
];
