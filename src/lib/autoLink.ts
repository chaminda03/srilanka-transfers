import { anchorRules } from "@/site/anchors";
import { getPageById } from "@/lib/site";

// Escape regex special characters
function escapeRegex(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function autoLinkText(text: string) {
  let output = text;
  const linkedTargets = new Set<string>();

  anchorRules.forEach(({ phrase, targetId }) => {
    if (linkedTargets.has(targetId)) return;

    const page = getPageById(targetId);
    if (!page) return;

    const safePhrase = escapeRegex(phrase);

    // Do NOT match inside existing anchor tags
    const regex = new RegExp(
      `(?<!<a[^>]*?>)(\\b${safePhrase}\\b)(?![^<]*<\\/a>)`,
      "i"
    );

    if (!regex.test(output)) return;

    output = output.replace(
      regex,
      `<a href="${page.path}" class="underline hover:no-underline">$1</a>`
    );

    linkedTargets.add(targetId);
  });

  return output;
}
