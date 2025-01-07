---
link: https://ankiweb.net/decks
---
Anki is a free flashcard tool with cloud sync capabilities. 

Use decks for broad subjects, :: to embed decks within decks. 

A note is a collection of fields with some styling/tagging meta data as well.

We use card types to specify how the note fields translate to cards. we use a card template with their templating language and embedded field names to compose the card type.

If you can remember an answer in ~10s, then just show answer.

Anki sorts decks alphabetically with - being before everything and ~ being after. While anki will fetch cards from subdecks in parallel, they will be ordered by their deck ordering. so preface higher priority decks with "-"

Tags work at the note level, so tagging a single card tags its siblings.

use cloze deletion, keep things simple, remember you should paint a bigger picture before trying to nail specifics, imagery is powerful, graphic deletion just as good as cloze deletion, sets are super hard to remember, convert to sequances if possible, but even then they are hard so use cloze deletions. Use minimum words to light the bulb in ur brain. personalize and provide examples, use context clues to simplify/abbreviate wording, include sources for non-trivial knowledge, prioritize:
1. prioritize your sources
2. if formulating knowledge takes less than a minute, formulate otherwise direct import (image occlusion or whateva 

Anki renders cards using html, so we can use html/css/js in card templates to stylize/compose our cards

Anki won't generate a card with an empty front, so we can use this along with the {{ }} field rules to conditionally render stuff. with {{#field name}} content {{/field name}} content only renders if field name field has text in it, and ^ prefix would show if it was empty.

![[Pasted image 20250106130204.png]]
note that this only works if this is on the front of the card, on the back you would end up with cards that have a blank back side.

Options
Browsing
Filtered Decks
Searching
Managing Files
Stats
Media
