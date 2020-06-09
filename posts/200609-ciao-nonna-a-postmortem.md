---
pageTitle: Ciao Nonna - A Postmortem
date: 2020-06-09
---


(cross-posted [on itch.io](https://crescendo.itch.io/ciao-nonna/devlog/153089/ciao-nonna-a-postmortem))  

This is not my first game, but it's my first postmortem EVER. I planned to write it before release, but I have a tendency of... losing myself into work. I scribbled some notes here and there and thought "I'll write it later" until I realized I was awake at 1AM, building the 1.0 version (don't do this kids).

So! What might sound weird is that I originally planned to develop this in Godot. I signed up for the **I CAN'T DRAW** game jam thinking it would've been the perfect opportunity to familiarize with the engine... except I work a full time job, I upload covers bi-weekly on a YouTube channel and I've unexpectedly felt sick _right_ when the jam started. Oops!

So I reanalyzed my ideas and went for GBStudio: easy framework, been wanting to experiment with it for a while, GB games are dope.

Besides, the less pixels and more limitations you have, the _less_ you have to draw. It's not only about not being able to draw, it's more of a "I'm doing everything else too, I **don't** want to draw".

But I drew her anyway.  

![](https://img.itch.zone/aW1nLzM2MDcwMTMuZ2lm/original/yy2Dss.gif)

This is Ofelia's first frontal animation, limiting myself on the GB palette... forgetting GBStudio only allows two sprites per walking animation. Other than that, she's considerably smaller than 16 pixels, the maximum sprite size. It was a nice exercise, but I had to do better.  

![](https://img.itch.zone/aW1nLzM2MDcxMTMuZ2lm/original/1nm10S.gif)  
The new Ofelia came out smaller and kind of reminiscent of NES sprites like those of Final Fantasy and MOTHER. She's cute, but I felt like going for a smaller size in an already small game was not ideal. Besides, the lack of outlines made it difficult to see her on all tiles at all times.  
In the end, I've decided to go for the default sprite style (which looks a lot like Pokémon):  
![](https://img.itch.zone/aW1nLzM2MDgxMjQuZ2lm/original/278LVm.gif)  
There we go.  
  
Then came the title screen. I saw the entire opening scene clearly in my head: the hands holding the letter, the close-up showing its contents (which meant I could convey lots of informations without drawing **anything**), then the view from the boat. It was only after drawing the first two that I decided to make the third a title screen (and put the whole thing as a skippable scene before that).  
So I made this:  
![](https://img.itch.zone/aW1nLzM2MDgxOTAucG5n/original/PE%2FH9U.png)  
Turns out this won't do! The Game Boy hardware only allows up to 192 unique tiles (which are portions of 8x8 pixels on screen) and this was... way more. So I moved the horizon line, deleted the sea details most of the clouds:  
![](https://img.itch.zone/aW1nLzM2MDgyMTQucG5n/original/k1x1Zy.png)  
But I wasn't done yet. This screen wasn't very accessible by itself: I needed at least a "Press Start" text. I couldn't put it in with GB Studio without opening a textbox, so I edited the title...  
![](https://img.itch.zone/aW1nLzM2MDgyMzQucG5n/original/dpwyqY.png)  
...and my unique tiles went up to 195. Some more cleaning to do!  
![](https://img.itch.zone/aW1nLzM2MDgyNDMucG5n/original/7PJB%2Bx.png)  
It's mostly edits on the hair and I made the island smaller. Finally, I was done. Though I liked her messy hair more before.  
  
The story is pretty straightforward: I thought of "girl comes back the homeland she loathes to grieve for her dead grandma, taking pics as a game mechanic". The game mechanic got mostly lost in the framework change (though I'd like to give it another shot). I find the ending a bit lukewarm but I guess the journey is the most important part? Then again, I've been told it all felt very emotional so I guess I did something right.  
  
As for the music... I just don't mix well with trackers, and not being able to use MilkyTracker at its fullest really hurt my production this time. That said, I made it all in one day so I didn't have very high expectations!  
I would've gone nuts on the sound effects if I didn't read they don't work very well in the framework (you have to replay music from the start after every sound plays). I was planning on having a different sound effect when each character starts talking.  
As a side note: the title/flashback theme takes from a very old snippet I composed and then dropped lots of years ago! It's a very painful melody I wanted to find a home to. I think it fits nicely here.
