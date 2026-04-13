# 🗓️ shift-prompt-generator

> [!INFO] ステータス: 稼働中
> スタッフ各員の希望シフトから、最適な当番表を作成するための AI 用プロンプトを生成する SPA ツールです。

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 🚀 概要 (Overview)
「シフトの希望をバラバラに聞くと、調整が大変」という課題を解決します。自由な形式で入力されたスタッフの希望を貼り付けると、AI（Gemini 等）が当番表を作成するために必要な正確な制約条件を抽出し、高品質なプロンプトを自動生成します。

## ✨ 機能・特徴 (Features)
- **柔軟なパース**: 「○日は休み」「△日は夜勤不可」といった自然言語を、AIが理解しやすい論理的な制約へ変換。
- **マルチソース対応**: テキストの貼り付け、または CSV/Excel 形式の簡易的な読み込みをサポート。
- **ロジック最適化**: スタッフのスキルレベル（ABCD等）に応じた配置バランスの制約を付与。
- **高い機密性**: 処理は全てブラウザ内で完結 (Client-Side Only)。個人情報が含まれる可能性のあるデータを外部サーバーへ送信しません。

## 🛠 技術構成 (Tech Stack)
- **Frontend**: React (Functional Components / Hooks)
- **Tooling**: Vite (Fast Refresh / HMR)
- **Deployment**: Single Page Application (SPA)

---
**Developer/User**: yert1 (Medical Professional Context)
