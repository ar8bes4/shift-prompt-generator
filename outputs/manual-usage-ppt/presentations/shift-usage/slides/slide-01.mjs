import { addFooter, colors } from "./slide-utils.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  ctx.addShape(slide, { x: 0, y: 0, w: ctx.W, h: ctx.H, fill: colors.paper });
  ctx.addShape(slide, { x: 64, y: 56, w: ctx.W - 128, h: ctx.H - 112, fill: colors.panel, line: ctx.line(colors.line, 1) });
  ctx.addText(slide, {
    x: 96,
    y: 96,
    w: 450,
    h: 30,
    text: "当直表作成ツール 使用方法",
    fontSize: 18,
    color: colors.accentDeep,
    bold: true,
  });
  ctx.addText(slide, {
    x: 96,
    y: 150,
    w: 780,
    h: 150,
    text: "希望シフトを集めて、AI用プロンプトを作成する",
    fontSize: 48,
    color: colors.ink,
    bold: true,
    typeface: ctx.fonts.title,
  });
  ctx.addText(slide, {
    x: 96,
    y: 326,
    w: 820,
    h: 78,
    text: "メンバーから集めた希望をもとに、当直表作成に必要な条件を整理したプロンプトを生成します。完成品は、表形式のテキストをそのまま納品すれば大丈夫です。",
    fontSize: 22,
    color: colors.muted,
  });
  ctx.addShape(slide, { x: 96, y: 448, w: 920, h: 94, fill: colors.soft, line: ctx.line(colors.accent, 2) });
  ctx.addText(slide, { x: 124, y: 466, w: 180, h: 24, text: "ツールURL", fontSize: 16, color: colors.accentDeep, bold: true });
  ctx.addText(slide, {
    x: 124,
    y: 496,
    w: 820,
    h: 32,
    text: "https://ar8bes4.github.io/shift-prompt-generator/",
    fontSize: 22,
    color: colors.accentDeep,
    bold: true,
  });
  ctx.addText(slide, {
    x: 96,
    y: 596,
    w: 620,
    h: 28,
    text: "対象: 当直表作成担当者、希望シフトを提出するメンバー",
    fontSize: 15,
    color: colors.muted,
  });
  addFooter(slide, ctx, "1 / 5");
  return slide;
}
