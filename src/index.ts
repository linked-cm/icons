/**
 * `@_linked/icons` — the Linked icon set.
 *
 * One place where an icon gets its name. Applications and component packages reach for
 * `Icons.Trash` rather than each choosing its own alias for the same glyph, which is how a
 * codebase ends up with `Trash2`, `TrashIcon` and `Delete` all rendering the same thing.
 *
 * Most of the set is a re-export of `lucide-react` under stable, intention-revealing names,
 * so swapping the underlying set — or overriding one glyph — is a change here rather than a
 * change everywhere. The rest are hand-drawn, for concepts lucide has no icon for.
 *
 * `lucide-react` is a peer dependency: the icons are re-exported, not wrapped, so a single
 * copy has to be shared with the consuming app or the same glyph exists twice in the bundle.
 */
import './types';

export * from './icons.js';
