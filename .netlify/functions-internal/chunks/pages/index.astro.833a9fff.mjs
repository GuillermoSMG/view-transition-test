/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../astro.6441425e.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.88d61396.mjs';
import { b as books } from './_book_.astro.987379bb.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$3 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
  Books test
</h1>`;
}, "C:/Users/User/Desktop/books-test/src/components/Title.astro");

const $$Astro$2 = createAstro();
const $$BookItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookItem;
  const { title, img, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${id}`, "href")} class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl">
  <img${addAttribute(img, "src")}${addAttribute(`${title} book cover`, "alt")} class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"${addAttribute(`view-transition-name:book-${id}`, "style")}>
</a>`;
}, "C:/Users/User/Desktop/books-test/src/components/BookItem.astro");

const $$Astro$1 = createAstro();
const $$ListOfBooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfBooks;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
  ${books.map((book) => {
    return renderTemplate`<li>
          ${renderComponent($$result, "BookItem", $$BookItem, { "id": book.id, "img": book.img, "title": book.title })}
        </li>`;
  })}
</ul>`;
}, "C:/Users/User/Desktop/books-test/src/components/ListOfBooks.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Books test" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="m-auto max-w-4xl">
    ${renderComponent($$result2, "Title", $$Title, {})}

    ${renderComponent($$result2, "ListOfBooks", $$ListOfBooks, {})}
  </main>
` })}`;
}, "C:/Users/User/Desktop/books-test/src/pages/index.astro");

const $$file = "C:/Users/User/Desktop/books-test/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
