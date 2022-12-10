import React, { forwardRef, useState } from "react";

import { data as emojiList } from "./data";

const EmojiPicker = ({ props }, refInput) => {
	const [isOpen, setIsOpen] = useState(false);
	const [emojis, setEmojis] = useState(emojiList);

	function handleClickOpen() {
		setIsOpen(!isOpen);
	}

	function EmojiPickerContainer() {
		return (
			<div>
				<input />

				<div>
					{emojis.map((emoji) => (
						<div>{emoji.symbol}</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div>
			<button onClick={handleClickOpen}> 😀 </button>

			{isOpen ? <EmojiPickerContainer /> : ""}
		</div>
	);
};

export default forwardRef(EmojiPicker);
