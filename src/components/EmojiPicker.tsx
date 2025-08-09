import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function EmojiPicker({ emojis }: { emojis: string[] }) {
    const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const pickEmoji = (emoji: string) => {
        if (!emojis.includes(emoji)) return
        setCurrentEmoji(emoji);
        setIsDialogOpen(false);
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger className={"w-32 h-32"}>
                <Button className={"w-32 h-32 text-8xl bg-black/0 hover:bg-black/20"}>{currentEmoji}</Button>
            </DialogTrigger>
            <DialogContent className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 p-4 h-calc[75%])">
                {emojis.map(emoji => (
                    <Button key={emoji} onClick={() => pickEmoji(emoji)} className={"text-6xl bg-black/0 hover:bg-black/20"}>
                        {emoji}
                    </Button>
                ))}
            </DialogContent>
        </Dialog>
    )
}