import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function EmojiPicker({ emojis }: { emojis: string[] }) {
    const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const pickEmoji = (emoji: string) => {
        if (!emojis.includes(emoji)) return
        setCurrentEmoji(emoji);
        setIsDropdownOpen(false);
    }

    return (
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
                <Button>{currentEmoji}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {emojis.map(emoji => (
                    <DropdownMenuItem key={emoji} onClick={() => pickEmoji(emoji)}>{emoji}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}