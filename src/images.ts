import Meta from "@public/traits/Clothes/Clothes_Meta.jpg"
import Trader from "@public/traits/Clothes/Clothes_Trader.jpg"
import Device from "@public/traits/Devices/Device.jpg"
import Mask2 from "@public/traits/Devices/Device 2.jpg"
import Grimace from "@public/traits/Face/Face_Bubble.jpg"
import Bubblegum from "@public/traits/Face/Face_Grimace.jpg"
import Blond from "@public/traits/Hair/Hair_Blond.jpg"
import Red from "@public/traits/Hair/Hair_Red.jpg"
import Energy from "@public/traits/Hand Accessories/Hand_Zap.jpg"
import Joystick from "@public/traits/Hand Accessories/Hand_Joystick.jpg"
import Helmet from "@public/traits/Headgear/Helmet.jpg"
import Mask from "@public/traits/Headgear/Mask.jpg"
import Metal from "@public/traits/Implants/Implants_Metal.jpg"
import Neon from "@public/traits/Implants/Implants_Neon.jpg"
import Laser from "@public/traits/Special Effects/SE_Laser.jpg"
import Lightning from "@public/traits/Special Effects/SE_Lightning.jpg"

export default {
    Clothes: [Meta, Trader],
    Devices: [Device, Mask2],
    Face: [Grimace, Bubblegum],
    Hair: [Blond, Red],
    "Hand Accessory": [Energy, Joystick],
    "Head Gear": [Helmet, Mask],
    Implants: [Metal, Neon],
    "Special Effects": [Laser, Lightning]
}