import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function EmojiPicker({ selectedEmoji, emojiList, setEmoji }: { selectedEmoji: string, emojiList: string[], setEmoji: (emoji: string) => void }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        console.log(selectedEmoji)
    }, [selectedEmoji])

    const pickEmoji = (emoji: string) => {
        if (!emojiList.includes(emoji)) return
        setEmoji(emoji)
        setIsDialogOpen(false);
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger className={"w-32 h-32"}>
                <Button className={"w-32 h-32 text-8xl bg-black/5 hover:bg-black/20"}>{selectedEmoji}</Button>
            </DialogTrigger>
            <DialogContent className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 p-4 h-[calc(75%)] w-full">
                {emojiList.map(emoji => (
                    <Button key={emoji} onClick={() => pickEmoji(emoji)} className={"w-16 h-16 text-4xl bg-black/0 hover:bg-black/20"}>
                        {emoji}
                    </Button>
                ))}
            </DialogContent>
        </Dialog>
    )
}