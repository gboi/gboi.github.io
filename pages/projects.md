---
pageTitle: Projects
---

Here's a collection of games and scripts I've worked or I've been working on.

## Games

### [Café Bouvardie](https://crescendo.itch.io/cafe-bouvardie)
Short visual novel about time travel, coffee, and finding your place in the world. Made as a collab for [Yuri Game Jam 2019](https://itch.io/jam/yuri-game-jam-2019).

### [X to shoot](https://crescendo.itch.io/x-to-shoot)
560-characters game made with TIC-80 for [TweetTweetJam 3](https://itch.io/jam/tweettweetjam-3). Here's the source code:
<pre><code class="language-lua">
t=0 s=3 w=0 d=60 e=0 p="O" p1=p p2=p p1s="Op" p2s="dO" m="" mr="\nZ to restart" f=10 function TIC() if t%d==1 and w==0 then s=s-1 end if s&#60;0 then s=3 p1=p p2=p end if s==0 and e&#60;=d/2 then e=e+1 else e=0 end if e==d/2 and w==0 then p2=p2s w=-1 end if btn(5) and w==0 then p1=p1s if s==0 then w=1 d=d-f else w=-1 end end cls(3) print(s,114,35) print(p1,36,92) print(p2,176,92) print("X to shoot",90,24,9) if d&#60;=f then mr="" elseif btn(4) and w~=0 then w=0 t=0 s=0 m="" end if w==1 then m="win!"..mr elseif w==-1 then m="lost!"..mr end print(m,100,50,9) t=t+1 end
</pre></code>

### [Emperor's Lesbian New Groove (DEMO)](https://crescendo.itch.io/emperors-lesbian-new-groove)
Visual novel made as a collab for [Yuri Game Jam 2016](https://itch.io/jam/yuri-game-jam-2016). Currently working on the full version (due 2020).

## Utils
### [Tweet Formatter](https://github.com/gboi/tweet_formatter)
Small python program that formats a tweet in a .png file given the tweet's URL. Open to more template options.

### [Manga Release Date Grabber](https://github.com/gboi/Manga-Release-Date-Grabber)
(Italian Only) Script per Tampermonkey che fa comparire un bottoncino [sul calendario manga di AnimeClick](https://www.animeclick.it/calendario-manga). Al click stampa a schermo, a partire da una lista data:

+ I manga inclusi in pagina che fan parte della lista
+ Le rispettive date d'uscita
+ I prezzi singoli e la somma dei prezzi in totale

### [This blog](https://github.com/gboi/gboi.github.io)
This blog's repository.
