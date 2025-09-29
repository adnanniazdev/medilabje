## Old vs New UI Comparison (Exact Match Requirements)

| Page/Area | Section | Old Site (Expected) | New Site (Observed) | Required Fix/Action | Priority |
|---|---|---|---|---|---|
| Global | Typography/Spacing | Heavier weights, consistent leading and section paddings | Several weights lighter; reduced vertical paddings | Align font-family/weights, line-heights, and section paddings to old tokens | P0 |
| Header | Menu links | Bold/Semibold links (e.g., 600–700) | Links appear lighter | Increase font-weight to match old; verify letter-spacing/hover | P0 |
| Home | Hero “Medical Laboratory” banner | Larger font size, stronger color/weight | Lighter color/weight; size differs | Match font-size, color, weight exactly | P0 |
| Home | Features row (Superior Service, etc.) | Title weight 700, body readable contrast | Lighter title/body weights | Apply title 700 and correct colors; body 400–500 | P0 |
| Home | Booking cards | Taller images; generous section top/bottom space | Card images shorter; less section spacing | Increase image height/aspect; add section padding to old values | P0 |
| Home | Tests section (overview) | Constrained width to old container | Wider than old | Reduce max-width/side padding to match old | P1 |
| Home | Testimonials | No internal scrollbars; card tall enough | Vertical scrollbar present | Increase card height or adjust content/leading to remove overflow | P0 |
| Home | Medical Lab (with icon) | Exact font size/color from old | Size/color differ | Apply old font tokens | P1 |
| Home | Contact section above footer | Fonts/CTA match old | Font size/weight differ | Match sizes/weights; check CTA styles | P1 |
| Footer | Footer text/links | Heavier/clearer typography | Lighter/smaller | Match font sizes/weights for all footer items | P1 |
| Tests page | General text blocks | Correct line-height/paragraph spacing | Line-height/spacing off | Set leading and margins to old values | P0 |
| Tests page | “Test Profiles” extra section | Not present | Extra section exists | Remove/hide section for parity | P0 |
| Tests page | Specimens section | Normal gap between image/content | Too much gap | Reduce column gap/margins to old | P1 |
| Tests page | Sample Requirements heading | Matches old heading style | Font mismatch | Apply old heading size/weight | P1 |
| Tests page | Cards style | No shadow | Shadows present | Remove shadows to match old | P1 |
| Tests page | Helpful Information | Contains Contact Us button | Button missing | Add “Contact Us” button | P1 |
| Tests page | Request Forms section | Normal bottom space | Too much bottom space | Reduce bottom padding/margin | P2 |
| Male Health | Cards | No shadow | Shadows present | Remove shadows | P1 |
| Male Health | Profiles naming | “MEDIMALE BASIC” present | “TESTOSTERONE CHECK” instead | Align names/content to old (pending amendments) | P1 |
| Female Health | Cards | Match old Elementor cards | Different UI | Rebuild cards to match old layout/styles | P0 |
| Female Health | Profiles naming | “THYROID” and “MEDIFEMALE BASIC” | “THYROID FUNCTION CHECK”, “FEMALE HORMONES CHECK” | Rename to match old (or confirm amendments) | P1 |


<!-- 
QA Checklist (per item)
- Capture Old vs New screenshots (same viewport)
- Inspect computed styles for font-size/weight/color and paddings/margins
- Confirm no unexpected scrollbars/overflows
- Re-test after fixes and attach updated screenshots -->


