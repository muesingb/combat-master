import { ToggleProps } from "./Toggle";

export const actions: ToggleProps[] = [
  {
    label: "Attack",
    bodyText:
      'The most common action to take in combat is the Attack action, whether you are swinging a sword, firing an arrow from a bow, or brawling with your fists. With this action, you make one melee or ranged attack. See the "Making an Attack" section for the rules that govern attacks. Certain features, such as the Extra Attack feature of the fighter, allow you to make more than one attack with this action.',
  },
  {
    label: "Cast a spell",
    bodyText:
      "Spellcasters such as wizards and clerics, as well as many monsters, have access to spells and can use them to great effect in combat. Each spell has a casting time, which specifies whether the caster must use an action, a reaction, minutes, or even hours to cast the spell. Casting a spell is, therefore, not necessarily an action. Most spells do have a casting time of 1 action, so a spellcaster often uses his or her action in combat to cast such a spell.",
  },
  {
    label: "Dash",
    bodyText:
      "When you take the Dash action, you gain extra movement for the current turn. The increase equals your speed, after applying any modifiers. With a speed of 30 feet, for example, you can move up to 60 feet on your turn if you dash. Any increase or decrease to your speed changes this additional movement by the same amount. If your speed of 30 feet is reduced to 15 feet, for instance, you can move up to 30 feet this turn if you dash.",
  },
  {
    label: "Disengage",
    bodyText:
      "If you take the Disengage action, your movement doesn't provoke opportunity attacks for the rest of the turn.",
  },
  {
    label: "Dodge",
    bodyText:
      "When you take the Dodge action, you focus entirely on avoiding attacks. Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage. You lose this benefit if you are srd:incapacitated or if your speed drops to 0.",
  },
  {
    label: "Help",
    bodyText:
      "You can lend your aid to another creature in the completion of a task. When you take the Help action, the creature you aid gains advantage on the next ability check it makes to perform the task you are helping with, provided that it makes the check before the start of your next turn. Alternatively, you can aid a friendly creature in attacking a creature within 5 feet of you. You feint, distract the target, or in some other way team up to make your ally's attack more effective. If your ally attacks the target before your next turn, the first attack roll is made with advantage.",
  },
  {
    label: "Hide",
    bodyText:
      "When you take the Hide action, you make a Dexterity (Stealth) check in an attempt to hide, following the rules for hiding. If you succeed, you gain certain benefits, as described in srd:unseen-attackers-and-targets.",
  },
  {
    label: "Ready",
    bodyText:
      'Sometimes you want to get the jump on a foe or wait for a particular circumstance before you act. To do so, you can take the Ready action on your turn, which lets you act using your reaction before the start of your next turn.First, you decide what perceivable circumstance will trigger your reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it. Examples include "If the cultist steps on the trapdoor, I\'ll pull the lever that opens it," and "If the goblin steps next to me, I move away." When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger. Remember that you can take only one reaction per round. When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell\'s magic requires concentration. If your concentration is broken, the spell dissipates without taking effect. For example, if you are concentrating on the srd:web spell and ready srd:magic-missile, your srd:web spell ends, and if you take damage before you release srd:magic-missile with your reaction, your concentration might be broken.',
  },
  {
    label: "Search",
    bodyText:
      "When you take the Search action, you devote your attention to finding something. Depending on the nature of your search, the GM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check.",
  },
  {
    label: "Use object",
    bodyText:
      "You normally interact with an object while doing something else, such as when you draw a sword as part of an attack. When an object requires your action for its use, you take the Use an Object action. This action is also useful when you want to interact with more than one object on your turn.",
  },
];