# @monbon-ui/react

## 0.2.0

### Minor Changes

- [#5](https://github.com/monishski/monbon-ui/pull/5) [`a64234b`](https://github.com/monishski/monbon-ui/commit/a64234bac3d4a63f1e2f6d013baefdf53b56398e) Thanks [@monishski](https://github.com/monishski)! - Add `isItemMuted` to `Combobox`, which fades the rows it returns true for. A muted row comes back while highlighted, and its selected check stays clear.

- [#5](https://github.com/monishski/monbon-ui/pull/5) [`c977fbb`](https://github.com/monishski/monbon-ui/commit/c977fbbffa1439aaf80f1f14cdef71b1c26d3206) Thanks [@monishski](https://github.com/monishski)! - Add an `as` prop to `Flex`, `Row` and `Stack`, so they can render as a `span` inside a button or link.

- [#5](https://github.com/monishski/monbon-ui/pull/5) [`cf4c4ed`](https://github.com/monishski/monbon-ui/commit/cf4c4edc0a1e86f47befa6f758725952611530cc) Thanks [@monishski](https://github.com/monishski)! - Add the List component: `List` and `ListItem`, which takes `label`, `description`, `start` and `end` props. Rows can render as buttons or links, with `active` and `muted` states.

## 0.1.0

### Minor Changes

- First release ([#1](https://github.com/monishski/monbon-ui/pull/1), [#2](https://github.com/monishski/monbon-ui/pull/2)).
  - Design tokens for colour, typography and layout, split into primitives and semantics, with light and dark themes. One stylesheet, `@monbon-ui/react/styles.css`, brings in the tokens and their Tailwind theme mappings.
  - Primitive components built on Base UI and React Aria: Avatar, Badge, Button, IconButton, Calendar, RangeCalendar, Combobox, DateInput, DatePicker, DateRangeInput, DateRangePicker, Divider, Field, Row and Stack, Heading, Text, Input, Label, Menu, Popover, ScrollArea, Select, Skeleton, Spinner, StatusDot, Surface, Switch, Thumbnail and Tooltip.
  - `cn`, `useDebouncedValue` and the date range preset helpers.
