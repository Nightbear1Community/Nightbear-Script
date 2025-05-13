// Game data with associated scripts
const gameData = [
    {
        id: "adopt-me",
        title: "Adopt Me!",
        description: "Pet collection and roleplay game",
        image: "https://tr.rbxcdn.com/180DAY-cac7ee5cfe82bc8d7a8fcf4711fdb526/512/512/Image/Webp/noFilter",
        tags: ["Roleplay", "Popular"],
        script: `-- Adopt Me! Auto-Farm Script
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

local function teleportToNearestPet()
    -- Find nearest pet logic here
    print("Teleporting to nearest pet...")
end

local function autoCollectMoney()
    -- Money collection logic here
    print("Auto-collecting money...")
end

-- Main execution
teleportToNearestPet()
autoCollectMoney()`,
        scriptDescription: "This script automatically collects money and teleports to the nearest pet in Adopt Me! for efficient farming."
    },
    {
        id: "brookhaven",
        title: "Brookhaven RP",
        description: "Popular roleplaying game",
        image: "https://tr.rbxcdn.com/180DAY-80df832c192f6497e75713c107b12d8f/512/512/Image/Webp/noFilter",
        tags: ["Roleplay", "Town"],
        script: `-- Brookhaven RP Script
-- Features: Auto-money, Godmode, Speed

local Player = game:GetService("Players").LocalPlayer
local Character = Player.Character or Player.CharacterAdded:Wait()

-- Godmode function
local function enableGodmode()
    print("Godmode activated!")
end

-- Speed boost
local function setSpeed(value)
    local humanoid = Character:FindFirstChildOfClass("Humanoid")
    if humanoid then
        humanoid.WalkSpeed = value
    end
end

-- Execute features
enableGodmode()
setSpeed(32)`,
        scriptDescription: "Enhance your Brookhaven experience with godmode, speed boosts, and automatic money collection."
    },
    {
        id: "mm2",
        title: "Murder Mystery 2",
        description: "Classic whodunit game",
        image: "https://tr.rbxcdn.com/180DAY-cee6edfb36f7c1d81e9ab0729d084de5/512/512/Image/Webp/noFilter",
        tags: ["Mystery", "Competitive"],
        script: `-- Murder Mystery 2 Script
-- Features: See murderer, Auto-win

local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

local function highlightMurderer()
    print("Murderer highlighted!")
end

local function autoKillWhenMurderer()
    print("Auto-kill enabled when murderer")
end

-- Main features
highlightMurderer()
autoKillWhenMurderer()`,
        scriptDescription: "Gain an advantage by seeing who the murderer is and automatically winning when you're the killer."
    },
    {
        id: "bloxfruits",
        title: "Blox Fruits",
        description: "Pirates-themed battle game",
        image: "https://tr.rbxcdn.com/5a724e74f99e4b46c56a802cd6d2a583/512/512/Image/Png",
        tags: ["Adventure", "Fighting"],
        script: `-- Blox Fruits Script
-- Auto farm, teleport, and more

local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

-- Auto farm fruits
local function autoFarmFruits()
    print("Auto-farming fruits...")
end

-- Auto raid
local function autoRaid()
    print("Auto-raid enabled")
end

-- Main features
autoFarmFruits()
autoRaid()`,
        scriptDescription: "Powerful script for Blox Fruits featuring auto-farming, teleportation, and auto-raid functionality."
    },
    {
        id: "arsenal",
        title: "Arsenal",
        description: "Fast-paced FPS game",
        image: "https://tr.rbxcdn.com/cde5476ac13435572dbd8b1a022ef6e4/512/512/Image/Png",
        tags: ["Shooter", "FPS"],
        script: `-- Arsenal Script
-- Features: Aimbot, ESP, Unlimited Ammo

local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

-- Aimbot function
local function enableAimbot()
    print("Aimbot enabled")
end

-- ESP function
local function enableESP()
    print("ESP enabled")
end

-- Main features
enableAimbot()
enableESP()`,
        scriptDescription: "Dominate in Arsenal with this script featuring aimbot, ESP, unlimited ammo, and more advanced features."
    },
    {
        id: "jailbreak",
        title: "Jailbreak",
        description: "Cops and robbers game",
        image: "https://tr.rbxcdn.com/a2ed31ce6fe1f5ed7e3fb82296c10aff/512/512/Image/Png",
        tags: ["Adventure", "Popular"],
        script: `-- Jailbreak Script
-- Auto-rob, teleport, and more

local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

-- Auto rob function
local function autoRob()
    print("Auto-rob enabled")
end

-- No clip function
local function enableNoClip()
    print("No-clip enabled")
end

-- Main features
autoRob()
enableNoClip()`,
        scriptDescription: "Complete Jailbreak script with auto-rob functionality, teleportation, vehicle modifications, and more for efficient gameplay."
    }
];