import React, { useRef } from "react";
import EmojiPicker from "./emojiPicker";

const EmojiPickerInput = () => {
	const refInput = useRef(null);

	return (
		<div>
			<input type="text" ref={refInput} />
			<EmojiPicker ref={refInput}></EmojiPicker>
		</div>
	);
};

export default EmojiPickerInput;
