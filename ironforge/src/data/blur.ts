/**
 * Tiny base64 previews (16px WebP, ~200 bytes each) shown while the full
 * image loads — removes the flash of empty space without extra requests.
 */
export const blurPlaceholders: Record<string, string> = {
  "/images/facility-cardio-zone.webp": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoQAAkAAgA0JaQAAsf28Kl/qAD+/Z88i3aeLS7258QTt7aFeM2GodMdjRe9xPQMpOX6eGQ0WgIlkZigEgA8AAAA",
  "/images/facility-free-weights.webp": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAgCdASoQAAsAAgA0JZACdADwt6xPQVwAAP7+Fv7H5uql4lRFdKh6fBxrvOmbK/BO3Em7lP1jc+R5fwpP/rFmTleYhESUuBcZNMjnNfAI5uFDMchLDjdt+h90l+CP8AA=",
  "/images/facility-functional-area.webp": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAwAgCdASoQAAwAAgA0JZQCdAEfnRlufO+5YAD+/bllwtYnd5LEd77quG/v6oycXb3xePHgnX2KMfj9vvEebhM+Wviwnqjv0BJ0ckT8k39eLSAjtmAAAA==",
  "/images/facility-premium-interior.webp": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADwAQCdASoQAAkAAgA0JYwCdADxEJ9+rAAA/vNBExQ5uoWOmvf8G2ERCuNhXJrMYRz/kb4dReqjlXQbjZE6sBh19tksCx8YVgI8nwbPGaCIwBj4pyV7wezaAmu5vqTmPM0OEz/exc1yAAAA",
  "/images/facility-training-equipment.webp": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAQCdASoQAAcAAgA0JYwCdAERHzqnF1AA/u+vCHOlrZWLcSHG0dj9GKkqTS3f9XntjtucpF5WspJwpzFf+/oWWaSHKvFsQJ115gMKN7/pQuAA",
  "/images/facility-weight-training.webp": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoQAAkAAgA0JZQCdAYsFgcF572gAP73nzD7zE5ItD0rUg8BlN1bSmtXuxYPhk39ypbhLl3yfTJ7btOD7eUu2iiWxg0OtMwxFIXmhMKNo2ZNhF+u2kxDCbSFXuR4AAAA",
  "/images/functional-fitness.webp": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAQCdASoQAAcAAgA0JYwCdAERHzrnBqwA/u+vCHOlrZWLcSHG0dj9GKkqTS3f9XntjtucpF5WspJwpzFf+KYDojz15HWON0EopAeWUEz+nAAA",
  "/images/gym-cta-banner.webp": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoQAAkAAgA0JaQAAvrfelSqbtgA/v2fPIt1EUiO6eAQpjDGcSYkp+aTT25KWDP5drujc1JkCewX3wlDJApgAA==",
  "/images/gym-hero.webp": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAgCdASoQAAkAAgA0JZACdAEVz6FUN/KAAP79ddYO7jdGniWIwzJCYbuQ9Nb67MRummNRlY95KaGN7Py7PpeEM2GQbG1qCHtb0UuOp22htEKllYXTT0Sst0RT7Z/1gAA=",
  "/images/gym-interior.webp": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADwAQCdASoQAAkAAgA0JYwCdADxEJ9+rAAA/vNBExQ5uoWOmvf8G2Ews46cBFnUxhHP+Rvh1F6qOVdBuNkTqwGHX22SwLHxhWAjyfBs8ZoIjAGPinJXvB7NoCa7m+pOY8zQ4TP97FzXIAAA",
  "/images/hiit-conditioning.webp": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoQAAkAAgA0JaQAAsf27hcvogAA/v2fPIt2ni0u9ufEE7f4tS8dthHTHY0XvcT0DKTl+nfbbP2Z6+8T2DJApgAA",
  "/images/personal-training.webp": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQBACdASoQABQAPpE4l0eloyIhMAgAsBIJZwDCgYrw7W1UkdEqMVyLsAD++xgm66TUdMdPGz4JaxcVBTty2SmfDAf3Gmvw8oKCKa9nPf2F072GgZgETRsu2bL8+FAgxI0G+AAA",
  "/images/strength-training.webp": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoQAAkAAgA0JZQCdAYr7gcFXRRwAP74cDctnl+GydwcQXUOq6rALOl1zdPuuQ8Fy4hpfGIZL3P4ieFdDUN9dtBEweGoufT/PSW9rIhU3UbMmwi/XbSYhhNpCr3I8AAA",
  "/images/trainer-alex-carter.webp": "data:image/webp;base64,UklGRqwAAABXRUJQVlA4IKAAAABQBACdASoQABQAPpE4l0eloyIhMAgAsBIJYwCdH8ADAxCMlqKuCWq57LAAAP64JadRiviYK2L8jaH+j7VrQKmjY7bboxdILXYFN3By85LN53f5+5F+LZAIDnWZOyomfsiEhFpfYjJ9SNG7mG/3liTxnRPxC+rLBCP1m6GSP8VWnyQy2rIIF4anVGANiOTtaglYIrjcVB3jlj8U8pAKAAAA",
  "/images/trainer-maya-brooks.webp": "data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAABQBACdASoQABQAPpE4l0eloyIhMAgAsBIJQBdmUAS3Iv+BvscUeH6/W1ygAP77E4vwUajpjmgHQJsNFjZ0XyBY3WsVl1ZBwBaCw2IvEPI7kAEatmTvuzGQuX8tzg0gdB+OLyQiDXr8wg7e4U50LoAFHfBBdHHs3a6EcenhHNND1DppMZuixdqwH/Ji7YynpHtfSI8gprm/9Uc0gAA=",
  "/images/trainer-sofia-reyes.webp": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQBACdASoQABQAPpE4l0eloyIhMAgAsBIJZwDCgCK3lykAPeN+tpqzoAD++5NIEWf+OwmQ680rb65CWkRI9ai0dsZ0v7jTs0d17l4NPuZS60vEEXvoiLTDWnrl+6JxbqdeAqSFgAA=",
};
