/** A run of text; `{ strong }` runs render in bold. */
export type RichText = (string | { strong: string })[];

export interface Profile {
  name: string;
  /** Short label in the pill above the name on the home page. */
  role: string;
  /** One- or two-sentence pitch under the name on the home page. */
  heroPitch: string;
  /** About page bio, one entry per paragraph. */
  bio: RichText[];
}
