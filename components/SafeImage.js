"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * next/image that quietly disappears instead of showing a broken-image icon
 * if the source ever 404s — the surrounding CSS (a navy gradient background,
 * or a fallback icon layered behind it) shows through instead. Needed
 * because Server Components can't pass event handlers like onError down to
 * a Client Component (next/image) as props.
 */
export default function SafeImage(props) {
  const [broken, setBroken] = useState(false);
  if (broken) return null;
  return <Image {...props} onError={() => setBroken(true)} />;
}
