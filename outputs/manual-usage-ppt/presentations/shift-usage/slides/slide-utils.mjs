export const colors = {
  ink: "#1f2933",
  muted: "#5b6777",
  line: "#d8dee8",
  paper: "#f7f9fc",
  panel: "#ffffff",
  accent: "#1f7a8c",
  accentDeep: "#155e75",
  soft: "#e8f3f6",
  notice: "#fff4d6",
  dark: "#111827",
  white: "#ffffff",
};

export function baseSlide(presentation, ctx, kicker, title) {
  const slide = presentation.slides.add();
  ctx.addShape(slide, { x: 0, y: 0, w: ctx.W, h: ctx.H, fill: colors.paper });
  ctx.addShape(slide, { x: 56, y: 48, w: ctx.W - 112, h: ctx.H - 96, fill: colors.panel, line: ctx.line(colors.line, 1) });
  ctx.addText(slide, {
    x: 88,
    y: 74,
    w: 360,
    h: 28,
    text: kicker,
    fontSize: 16,
    color: colors.accentDeep,
    bold: true,
  });
  ctx.addText(slide, {
    x: 88,
    y: 112,
    w: 900,
    h: 92,
    text: title,
    fontSize: 38,
    color: colors.ink,
    bold: true,
    typeface: ctx.fonts.title,
  });
  return slide;
}

export function addFooter(slide, ctx, page) {
  ctx.addText(slide, {
    x: 88,
    y: 620,
    w: 220,
    h: 24,
    text: `当直表作成ツール 使用方法 / ${page}`,
    fontSize: 12,
    color: colors.muted,
  });
}

export function addCard(slide, ctx, x, y, w, h, heading, body) {
  ctx.addShape(slide, { x, y, w, h, fill: "#fbfcfe", line: ctx.line(colors.line, 1) });
  ctx.addText(slide, {
    x: x + 22,
    y: y + 18,
    w: w - 44,
    h: 30,
    text: heading,
    fontSize: 21,
    color: colors.accentDeep,
    bold: true,
  });
  ctx.addText(slide, {
    x: x + 22,
    y: y + 58,
    w: w - 44,
    h: h - 76,
    text: body,
    fontSize: 16,
    color: colors.muted,
  });
}

export function addStep(slide, ctx, index, x, y, w, heading, body) {
  ctx.addShape(slide, { x, y, w: 48, h: 48, fill: colors.accent, line: ctx.line(colors.accent, 0) });
  ctx.addText(slide, {
    x,
    y: y + 2,
    w: 48,
    h: 44,
    text: String(index),
    fontSize: 24,
    color: colors.white,
    bold: true,
    align: "center",
    valign: "middle",
  });
  ctx.addText(slide, {
    x: x + 66,
    y: y - 2,
    w: w - 66,
    h: 30,
    text: heading,
    fontSize: 21,
    color: colors.ink,
    bold: true,
  });
  ctx.addText(slide, {
    x: x + 66,
    y: y + 34,
    w: w - 66,
    h: 40,
    text: body,
    fontSize: 16,
    color: colors.muted,
  });
}

export function addTableRow(slide, ctx, x, y, label, body, options = {}) {
  const labelW = options.labelW ?? 220;
  const bodyW = options.bodyW ?? 780;
  const h = options.h ?? 62;
  ctx.addShape(slide, { x, y, w: labelW, h, fill: colors.soft, line: ctx.line(colors.line, 1) });
  ctx.addShape(slide, { x: x + labelW, y, w: bodyW, h, fill: colors.panel, line: ctx.line(colors.line, 1) });
  ctx.addText(slide, {
    x: x + 16,
    y: y + 16,
    w: labelW - 32,
    h: h - 28,
    text: label,
    fontSize: 17,
    color: colors.accentDeep,
    bold: true,
    valign: "middle",
  });
  ctx.addText(slide, {
    x: x + labelW + 18,
    y: y + 14,
    w: bodyW - 36,
    h: h - 24,
    text: body,
    fontSize: 16,
    color: colors.ink,
    valign: "middle",
  });
}
