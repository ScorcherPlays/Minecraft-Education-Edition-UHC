player.onChat("run", function () {
    player.execute(
    "gamerule naturalregeneration false"
    )
    player.execute(
    "setworldspawn 0 0 0"
    )
    gameplay.setDifficulty(HARD)
    gameplay.setGameRule(SHOW_COORDINATES, true)
    player.execute(
    "title @a Title UHC By Edward Mitchell"
    )
    player.execute(
    "spreadplayers 1000 1000 100 1000 @a"
    )
    player.execute(
    "gamerule falldamage false"
    )
    loops.pause(10000)
    player.execute(
    "gamerule falldamage true"
    )
    gameplay.setGameRule(PV_P, false)
    loops.pause(840000)
    player.execute(
    "title @a Title PVP on head to 0,0"
    )
    gameplay.setGameRule(PV_P, true)
})
