var SkillTotal = 16;
var OSTotal = 50;
var skillsList = [];
var skillsVersion;
var skillsDate;
var osList = [];
var osVersion;
var osDate;


async function getSkills(){
    const skillsJson = await fetch('https://jonjim.github.io/ltOnlineRulebook/skillList.json');
    const list = await skillsJson.json();
    skillsList = list.data;
    skillsVersion = list.version;
    skillsDate = list.date;
}

async function getOS(){
    const osJson = await fetch('https://jonjim.github.io/ltOnlineRulebook/osList.json');
    const list = await osJson.json();
    osList = list.data;
    osVersion = list.version;
    osDate = list.date;
}

function CalculateSkills(CheckName, Value) {
  if (document.getElementById(CheckName).checked) {
    SkillTotal = SkillTotal - Value;
    document.getElementById('sum').innerHTML = SkillTotal;
  }
  else{
  SkillTotal = SkillTotal + Value;
    document.getElementById('sum').innerHTML = SkillTotal;
  }
  
  if (SkillTotal < 8)
  {
  	document.getElementById('BodyDev2').disabled = !document.getElementById('BodyDev2').checked;
    document.getElementById('Healing2').disabled = !document.getElementById('Healing2').checked;
    document.getElementById('Spell2').disabled = !document.getElementById('Spell2').checked;
    document.getElementById('Incant2').disabled = !document.getElementById('Incant2').checked;
    document.getElementById('Power16').disabled = !document.getElementById('Power16').checked;
  }
  else{
  	document.getElementById('BodyDev2').disabled = document.getElementById('BodyDev').checked;
    document.getElementById('Healing2').disabled = (document.getElementById('Healing1').checked || document.getElementById('Spell2').checked || document.getElementById('Incant2').checked);
    document.getElementById('Spell2').disabled = (document.getElementById('Spell1').checked || document.getElementById('Healing2').checked || document.getElementById('Incant2').checked);
    document.getElementById('Incant2').disabled = (document.getElementById('Healing2').checked || document.getElementById('Spell2').checked || document.getElementById('Incant1').checked);
    document.getElementById('Power16').disabled = (document.getElementById('Power4').checked || document.getElementById('Power8').checked || document.getElementById('Power12').checked);
  }
	if (SkillTotal < 6)
  {
  	document.getElementById('Power12').disabled = !document.getElementById('Power12').checked;
    document.getElementById('Ritual3').disabled = !document.getElementById('Ritual3').checked;
  }
  else{
    document.getElementById('Power12').disabled = (document.getElementById('Power4').checked || document.getElementById('Power8').checked || document.getElementById('Power16').checked);
    document.getElementById('Ritual3').disabled = (document.getElementById('Ritual1').checked || document.getElementById('Ritual2').checked);
  }
  if (SkillTotal < 4)
  {
  	document.getElementById('BodyDev').disabled = !document.getElementById('BodyDev').checked;
    document.getElementById('HArm').disabled = !document.getElementById('HArm').checked;
    document.getElementById('ProjWep').disabled = !document.getElementById('ProjWep').checked;
    document.getElementById('Healing1').disabled = !document.getElementById('Healing1').checked;
    document.getElementById('Incant1').disabled = !document.getElementById('Incant1').checked;
    document.getElementById('Spell1').disabled = !document.getElementById('Spell1').checked;
    document.getElementById('Ritual2').disabled = !document.getElementById('Ritual2').checked;
    document.getElementById('Power8').disabled = !document.getElementById('Power8').checked;
    document.getElementById('Poison').disabled = !document.getElementById('Poison').checked;
  }
  else{
    document.getElementById('BodyDev').disabled = document.getElementById('BodyDev2').checked;
    document.getElementById('HArm').disabled = (document.getElementById('LArm').checked || document.getElementById('MArm').checked);
    document.getElementById('ProjWep').disabled = false;
    document.getElementById('Healing1').disabled = document.getElementById('Healing2').checked;
    document.getElementById('Incant1').disabled = document.getElementById('Incant2').checked;
    document.getElementById('Spell1').disabled = document.getElementById('Spell2').checked;
    document.getElementById('Ritual2').disabled = (document.getElementById('Ritual1').checked || document.getElementById('Ritual3').checked);
    document.getElementById('Power8').disabled = (document.getElementById('Power4').checked || document.getElementById('Power12').checked || document.getElementById('Power16').checked);
    document.getElementById('Poison').disabled = false;
  }
  if (SkillTotal < 3)
  {
    document.getElementById('MArm').disabled = !document.getElementById('MArm').checked;
    document.getElementById('Invocation').disabled = !document.getElementById('Invocation').checked;
    document.getElementById('Potion').disabled = !document.getElementById('Potion').checked;
  }
  else{
    document.getElementById('MArm').disabled = (document.getElementById('LArm').checked || document.getElementById('HArm').checked);
    document.getElementById('Invocation').disabled = false;
    document.getElementById('Potion').disabled = false;
  }
  if (SkillTotal < 2)
  {
    document.getElementById('Ambidex').disabled = !document.getElementById('Ambidex').checked;
    document.getElementById('LrgWep').disabled = !document.getElementById('LrgWep').checked;
    document.getElementById('Shield').disabled = !document.getElementById('Shield').checked;
    document.getElementById('LArm').disabled = !document.getElementById('LArm').checked;
    document.getElementById('Ritual1').disabled = !document.getElementById('Ritual1').checked;
    document.getElementById('Power4').disabled = !document.getElementById('Power4').checked;
    document.getElementById('Physician').disabled = !document.getElementById('Physician').checked;
  }
  else{
    document.getElementById('Ambidex').disabled = false;
    document.getElementById('LrgWep').disabled = false;
    document.getElementById('Shield').disabled = false;
    document.getElementById('LArm').disabled = (document.getElementById('MArm').checked || document.getElementById('HArm').checked);
    document.getElementById('Ritual1').disabled = (document.getElementById('Ritual2').checked || document.getElementById('Ritual3').checked);
    document.getElementById('Power4').disabled = (document.getElementById('Power8').checked || document.getElementById('Power12').checked || document.getElementById('Power16').checked);
    document.getElementById('Physician').disabled = false;
  }
  if (SkillTotal < 1)
  {
    document.getElementById('Thrown').disabled = !document.getElementById('Thrown').checked;
    document.getElementById('Contribute').disabled = !document.getElementById('Contribute').checked;
    document.getElementById('BindWounds').disabled = !document.getElementById('BindWounds').checked;
    document.getElementById('RecFor').disabled = !document.getElementById('RecFor').checked;
    document.getElementById('Evaluate').disabled = !document.getElementById('Evaluate').checked;
    document.getElementById('SenseMagic').disabled = !document.getElementById('SenseMagic').checked;
    document.getElementById('Cartography').disabled = !document.getElementById('Cartography').checked;
  }
  else
  {
    document.getElementById('Thrown').disabled = false;
    document.getElementById('Contribute').disabled = false;
    document.getElementById('BindWounds').disabled = false;
    document.getElementById('RecFor').disabled = false;
    document.getElementById('Evaluate').disabled = false;
    document.getElementById('SenseMagic').disabled = false;
    document.getElementById('Cartography').disabled = false;
  }
  
    // OS Checker
    document.getElementById('Plus4Cards').disabled = !(document.getElementById('Power8').checked || document.getElementById('Power12').checked || document.getElementById('Power16').checked || document.getElementById('Power4').checked || document.getElementById('Healing1').checked || document.getElementById('Healing2').checked || document.getElementById('Incant1').checked || document.getElementById('Incant2').checked || document.getElementById('Spell1').checked || document.getElementById('Spell2').checked);
    // Armour Mastery
    document.getElementById('ArmourMastery').disabled = !(document.getElementById('LArm').checked || document.getElementById('MArm').checked || document.getElementById('HArm').checked);
    // High Counter
    document.getElementById('HighCounter').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked || document.getElementById('Spell1').checked || document.getElementById('Spell2').checked);
    // Dedicated Follower
    document.getElementById('DedicatedFollower').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked);
    // Heal Alein
    document.getElementById('HealAlien').disabled = !(document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    // Immune to Disease
    document.getElementById('ImmuneDisease').disabled = !(document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    // Shield Mastery
    document.getElementById('ShieldMastery').disabled = !document.getElementById('Shield').checked;
    document.getElementById('CreatePoison').disabled = !document.getElementById('Poison').checked;
    document.getElementById('CreatePotion').disabled = !document.getElementById('Potion').checked
    document.getElementById('HandOfNature').disabled = !(document.getElementById('BindWounds').checked || document.getElementById('Physician').checked);
    document.getElementById('ScribeScroll').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked || document.getElementById('Spell1').checked || document.getElementById('Spell2').checked || document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('Surgery').disabled = !document.getElementById('Physician').checked;
    document.getElementById('TranscendArmour').disabled = !(document.getElementById('LArm').checked || document.getElementById('MArm').checked || document.getElementById('HArm').checked);
    document.getElementById('Contribute2').disabled = !document.getElementById('Contribute').checked;
    document.getElementById('CreateReagent').disabled = !(document.getElementById('Potion').checked || document.getElementById('Poison').checked);
    document.getElementById('DiscernPattern').disabled = !(document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('LastRites').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked);
    document.getElementById('PerformTransport').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked || document.getElementById('Spell1').checked || document.getElementById('Spell2').checked || document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('QuickArmourRepair').disabled = !(document.getElementById('LArm').checked || document.getElementById('MArm').checked || document.getElementById('HArm').checked);
    document.getElementById('Revive').disabled = !(document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('RiteMaster').disabled = !(document.getElementById('Ritual1').checked || document.getElementById('Ritual2').checked || document.getElementById('Ritual3').checked);
}

function OSCalculator(CheckName,Value){
if (CheckName.checked) {
    OSTotal = OSTotal - Value;
    document.getElementById('osp').innerHTML = OSTotal;
  }
  else{
  OSTotal = OSTotal + Value;
    document.getElementById('osp').innerHTML = OSTotal;
  }
  
  if (OSTotal < 40)
  {
    document.getElementById('ImmunePoison').disabled = !document.getElementById('ImmunePoison').checked;
  }
  else{
    document.getElementById('ImmunePoison').disabled = false;
  }
  if (OSTotal < 30){
    document.getElementById('HighCounter').disabled = !document.getElementById('HighCounter').checked;
    document.getElementById('DedicatedFollower').disabled = !document.getElementById('DedicatedFollower').checked;
    document.getElementById('DiscernAncestral').disabled = !document.getElementById('DiscernAncestral').checked;
    document.getElementById('DiscernDaemonic').disabled = !document.getElementById('DiscernDaemonic').checked;
    document.getElementById('DiscernElemental').disabled = !document.getElementById('DiscernElemental').checked;
    document.getElementById('DiscernUnliving').disabled = !document.getElementById('DiscernUnliving').checked;
    document.getElementById('ForensicAnalysis').disabled = !document.getElementById('ForensicAnalysis').checked;
    document.getElementById('HealAlien').disabled = !document.getElementById('HealAlien').checked;
    document.getElementById('ImmuneDisease').disabled = !document.getElementById('ImmuneDisease').checked;
    document.getElementById('ImmuneDistract').disabled = !document.getElementById('ImmuneDistract').checked;
    document.getElementById('ShieldMastery').disabled = !document.getElementById('ShieldMastery').checked;
    document.getElementById('TrapLore').disabled = !document.getElementById('TrapLore').checked;
    document.getElementById('TraverseWards').disabled = !document.getElementById('TraverseWards').checked;
  }
  else{
    document.getElementById('HighCounter').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked || document.getElementById('Spell1').checked || document.getElementById('Spell2').checked);
    document.getElementById('DedicatedFollower').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked);
    document.getElementById('DiscernAncestral').disabled = false;
    document.getElementById('DiscernDaemonic').disabled = false;
    document.getElementById('DiscernElemental').disabled = false;
    document.getElementById('DiscernUnliving').disabled = false;
    document.getElementById('ForensicAnalysis').disabled = false;
    document.getElementById('HealAlien').disabled = !(document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('ImmuneDisease').disabled = !(document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('ShieldMastery').disabled = !document.getElementById('Shield').checked;
    document.getElementById('TrapLore').disabled = false;
    document.getElementById('TraverseWards').disabled = false;
  }
  if (OSTotal < 20){
    document.getElementById('ArmourMastery').disabled = !document.getElementById('ArmourMastery').checked;
    document.getElementById('Bowyer').disabled = !document.getElementById('Bowyer').checked;
    document.getElementById('Conceal').disabled = !document.getElementById('Conceal').checked;
    document.getElementById('CreatePoison').disabled = !document.getElementById('CreatePoison').checked;
    document.getElementById('CreatePotion').disabled = !document.getElementById('CreatePotion').checked;
    document.getElementById('DetectBeguile').disabled = !document.getElementById('DetectBeguile').checked;
    document.getElementById('HandOfNature').disabled = !document.getElementById('HandOfNature').checked;
    document.getElementById('Identify').disabled = !document.getElementById('Identify').checked;
    document.getElementById('Identify').disabled = !document.getElementById('Identify').checked;
    document.getElementById('ImmuneRepel').disabled = !document.getElementById('ImmuneRepel').checked;
    document.getElementById('Locate').disabled = !document.getElementById('Locate').checked;
    document.getElementById('Scholar').disabled = !document.getElementById('Scholar').checked;
    document.getElementById('ScribeScroll').disabled = !document.getElementById('ScribeScroll').checked;
    document.getElementById('SleeplessChanting').disabled = !document.getElementById('SleeplessChanting').checked;
    document.getElementById('Surgery').disabled = !document.getElementById('Surgery').checked;
    document.getElementById('TranscendArmour').disabled = !document.getElementById('TranscendArmour').checked;
  }
  else{
    document.getElementById('ArmourMastery').disabled = !(document.getElementById('LArm').checked || document.getElementById('MArm').checked || document.getElementById('HArm').checked);
    document.getElementById('Bowyer').disabled = false;
    document.getElementById('Conceal').disabled = false;
    document.getElementById('CreatePoison').disabled = !document.getElementById('Poison').checked;
    document.getElementById('CreatePotion').disabled = !document.getElementById('Potion').checked
    document.getElementById('DetectBeguile').disabled = false;
    document.getElementById('HandOfNature').disabled = !(document.getElementById('BindWounds').checked || document.getElementById('Physician').checked);
    document.getElementById('Identify').disabled = false;
    document.getElementById('ImmuneRepel').disabled = false;
    document.getElementById('Locate').disabled = false;
    document.getElementById('Scholar').disabled = false;
    document.getElementById('ScribeScroll').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked || document.getElementById('Spell1').checked || document.getElementById('Spell2').checked || document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('SleeplessChanting').disabled = false;
    document.getElementById('Surgery').disabled = !document.getElementById('Physician').checked;
    document.getElementById('TranscendArmour').disabled = !(document.getElementById('LArm').checked || document.getElementById('MArm').checked || document.getElementById('HArm').checked);
  }
  if (OSTotal < 10){
    document.getElementById('Plus4Cards').disabled = !document.getElementById('Plus4Cards').checked;
    document.getElementById('Apprentice').disabled = !document.getElementById('Apprentice').checked;
    document.getElementById('ArmourApprentice').disabled = !document.getElementById('ArmourApprentice').checked;
    document.getElementById('Contribute2').disabled = !document.getElementById('Contribute2').checked;
    document.getElementById('CreateReagent').disabled = !document.getElementById('CreateReagent').checked;
    document.getElementById('DiscernPattern').disabled = !document.getElementById('DiscernPattern').checked;
    document.getElementById('GeneralKnowledge').disabled = !document.getElementById('GeneralKnowledge').checked;
    document.getElementById('HerbLore').disabled = !document.getElementById('HerbLore').checked;
    document.getElementById('ImmuneFear').disabled = !document.getElementById('ImmuneFear').checked;
    document.getElementById('ImmuneFumble').disabled = !document.getElementById('ImmuneFumble').checked;
    document.getElementById('LastRites').disabled = !document.getElementById('LastRites').checked;
    document.getElementById('PerformTransport').disabled = !document.getElementById('PerformTransport').checked;
    document.getElementById('QuickArmourRepair').disabled = !document.getElementById('QuickArmourRepair').checked;
    document.getElementById('Revive').disabled = !document.getElementById('Revive').checked;
    document.getElementById('RiteMaster').disabled = !document.getElementById('RiteMaster').checked;
    document.getElementById('Tracking').disabled = !document.getElementById('Tracking').checked;
    document.getElementById('TNS').disabled = !document.getElementById('TNS').checked;
    document.getElementById('Weaponsmith').disabled = !document.getElementById('Weaponsmith').checked;
    document.getElementById('WedgeMastery').disabled = !document.getElementById('WedgeMastery').checked;
  }
  else{
    document.getElementById('Plus4Cards').disabled = !(document.getElementById('Power8').checked || document.getElementById('Power12').checked || document.getElementById('Power16').checked || document.getElementById('Power4').checked || document.getElementById('Healing1').checked || document.getElementById('Healing2').checked || document.getElementById('Incant1').checked || document.getElementById('Incant2').checked || document.getElementById('Spell1').checked || document.getElementById('Spell2').checked);
    document.getElementById('Apprentice').disabled = false;
    document.getElementById('ArmourApprentice').disabled = false;
    document.getElementById('Contribute2').disabled = !document.getElementById('Contribute').checked;
    document.getElementById('CreateReagent').disabled = !(document.getElementById('Potion').checked || document.getElementById('Poison').checked);
    document.getElementById('DiscernPattern').disabled = !(document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('GeneralKnowledge').disabled = false;
    document.getElementById('HerbLore').disabled = false;
    document.getElementById('ImmuneFear').disabled = false;
    document.getElementById('ImmuneFumble').disabled = false;
    document.getElementById('LastRites').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked);
    document.getElementById('PerformTransport').disabled = !(document.getElementById('Incant1').checked || document.getElementById('Incant2').checked || document.getElementById('Spell1').checked || document.getElementById('Spell2').checked || document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('QuickArmourRepair').disabled = !(document.getElementById('LArm').checked || document.getElementById('MArm').checked || document.getElementById('HArm').checked);
    document.getElementById('Revive').disabled = !(document.getElementById('Healing1').checked || document.getElementById('Healing2').checked);
    document.getElementById('RiteMaster').disabled = !(document.getElementById('Ritual1').checked || document.getElementById('Ritual2').checked || document.getElementById('Ritual3').checked);
    document.getElementById('Tracking').disabled = false;
    document.getElementById('TNS').disabled = false;
    document.getElementById('Weaponsmith').disabled = false;
    document.getElementById('WedgeMastery').disabled = false;
  }
}

function ResetCreator()
{
var inputs = document.getElementsByTagName("input");
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type == "checkbox") {
        inputs[i].checked = false; 
    }  
}
SkillTotal = 16;
    document.getElementById('sum').innerHTML = SkillTotal;
CalculateSkills('BindWounds',0);
}

 function SkillCheck(SkillName){
    const skill = skillsList.find(x => x.name === SkillName);
    console.log(skillsList)
    document.getElementById('modal-header').innerHTML = skill.name;
    document.getElementById('modal-body').innerHTML = skill.description;
    document.getElementById('myModal').style.display = "block";
 }
 
function OSkillCheck(SkillID){
    document.getElementById('ModaliFrame').src = null;
    document.getElementById('ModaliFrame').src = "inc/osdesc.php?os=" + SkillID;
    document.getElementById('myModal').style.display = "block";
 }
 
 function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
  
  // Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function CloseModal() {
     document.getElementById('myModal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

getSkills();
getOS();
