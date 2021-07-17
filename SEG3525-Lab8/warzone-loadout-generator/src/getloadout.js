
export function getloadout(overkill, type1, type2, numAt1, numAt2){
    var data = require('./weapondata.json')
    var primary;
    var secondary;
    var lethal;
    var tactical;
    var perk1
    var perk2
    var perk3
    var primaryAttachments = []
    var secondaryAttachments = []
    var primaryMinLevel = 1
    var secondaryMinLevel = 1
    var temp
    var desiredLevel

    perk1 = data.Perks.Perk1
    perk1 = perk1[Math.floor(Math.random() * perk1.length)]

    if(overkill === 'Yes'){
        perk2 = "Overkill"
    }
    else{
        perk2 = data.Perks.Perk2
        perk2 = perk2[Math.floor(Math.random() * perk2.length)]
    }

    perk3 = data.Perks.Perk3
    perk3 = perk3[Math.floor(Math.random() * perk3.length)]

    if(type1 === 'Any' && type2 === 'Any'){
        primary = data.weapons.filter((weapon) => (weapon.Primary))
        primary = primary[Math.floor(Math.random() * primary.length)]

        if(perk2 === 'Overkill'){
            secondary = data.weapons.filter((weapon) => (weapon.Primary && weapon != primary))
            secondary = secondary[Math.floor(Math.random() * secondary.length)]
        }
        else{
            secondary = data.weapons.filter((weapon) => (!weapon.Primary))
            secondary = secondary[Math.floor(Math.random() * secondary.length)]
        }

    }

    else if(type1 != 'Any' && type2 == 'Any'){
        primary = data.weapons.filter((weapon) => (weapon.Primary && weapon.Type === type1))
        primary = primary[Math.floor(Math.random() * primary.length)]

        if(perk2 === 'Overkill'){
            secondary = data.weapons.filter((weapon) => (weapon.Primary && weapon != primary))
            secondary = secondary[Math.floor(Math.random() * secondary.length)]
        }
        else{
            secondary = data.weapons.filter((weapon) => (!weapon.Primary))
            secondary = secondary[Math.floor(Math.random() * secondary.length)]
        }

    }

    else if(type1 === 'Any' && type2 != 'Any'){
        primary = data.weapons.filter((weapon) => (weapon.Primary))
        primary = primary[Math.floor(Math.random() * primary.length)]

        secondary = data.weapons.filter((weapon) => (weapon.Type === type2 && weapon != primary))
        secondary = secondary[Math.floor(Math.random() * secondary.length)]

    }

    else{
        primary = data.weapons.filter((weapon) => (weapon.Primary && weapon.Type === type1))
        primary = primary[Math.floor(Math.random() * primary.length)]

        secondary = data.weapons.filter((weapon) => (weapon.Type === type2 && weapon != primary))
        secondary = secondary[Math.floor(Math.random() * secondary.length)]

    }

    temp = generateAttachments(primary, numAt1, primaryMinLevel, primary.MaxLevel)

    primaryAttachments = temp[0]
    primaryMinLevel = temp[1]

    temp = generateAttachments(secondary, numAt2, secondaryMinLevel, secondary.MaxLevel)
    secondaryAttachments = temp[0] 
    secondaryMinLevel = temp[1]

    tactical = data.Grenades.Tactical
    tactical = tactical[Math.floor(Math.random() * tactical.length)]

    lethal = data.Grenades.Lethal
    lethal = lethal[Math.floor(Math.random() * lethal.length)]

    console.log(primary, primaryAttachments)

    var loadout = {
        "primary": primary.Name,
        "secondary": secondary.Name,
        "lethal": lethal,
        "tactical": tactical,
        "perk1": perk1,
        "perk2": perk2,
        "perk3": perk3,
        "primaryAttachments": primaryAttachments,
        "secondaryAttachments": secondaryAttachments,
        "primaryMinLevel": primaryMinLevel,
        "secondaryMinLevel": secondaryMinLevel

    }

    return(loadout)

}

function generateAttachments(gun, numAt, minLevel, desiredLevel){
    /*oOrTwo true if primary, false if secondary*/
    var Attachments = []
    try{
        var AttachmentsTemp = []
        for(var i = 0; i<numAt; i++){
            var temp = gun.Attachments.filter((att) => (!AttachmentsTemp.includes(att)))
            temp = temp[Math.floor(Math.random() * temp.length)]
            AttachmentsTemp.push(temp)
            temp = Object.values(temp)[0]
            temp = temp.filter((att) => (Object.values(att)[0] <= desiredLevel))
            temp = temp[Math.floor(Math.random() * temp.length)]
            if(Object.values(temp)[0] > minLevel){
                minLevel = Object.values(temp)[0]
            }
            Attachments.push([Object.keys(temp)[0], Object.values(temp)[0]])
        }
    }
    catch(err){
        console.log("Error here")
        console.log(err)
        Attachments = []
        AttachmentsTemp = []
        for(var i = 0; i<gun.Attachments.length; i++){
            var temp = gun.Attachments.filter((att) => (!AttachmentsTemp.includes(att)))
            temp = temp[Math.floor(Math.random() * temp.length)]
            AttachmentsTemp.push(temp)
            temp = Object.values(temp)[0]
            temp = temp.filter((att) => (Object.values(att)[0] <= desiredLevel))
            temp = temp[Math.floor(Math.random() * temp.length)]
            if(Object.values(temp)[0] > minLevel){
                minLevel = Object.values(temp)[0]
            }
            Attachments.push([Object.keys(temp)[0], Object.values(temp)[0]])
        }
    }
    return [Attachments, minLevel]
}

