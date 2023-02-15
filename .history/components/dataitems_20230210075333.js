const methods = [
  { name: 'Testing', code: 'a' },
  { name: 'Visual', code: 'b' },
  { name: 'Measurement', code: 'c' },
  { name: 'Visual & Measurement', code: 'd' },
  { name: 'Testing & Visual', code: 'e' }
];
const sampleInspected = [
  { name: 'Whole ', code: 'a' },
  { name: 'Sample', code: 'b' }
];
const warehouseLocation = [
  { name: 'Lugogo Central store', code: 'a' },
  { name: 'Kitetika store', code: 'b' },
  { name: 'Nalukolongo store', code: 'c' },
  { name: 'Namuwongo store', code: 'd' },
  { name: 'Wankonko store', code: 'e' },
  { name: 'Namanve store', code: 'f' },
  { name: 'Kampala pole plant', code: 'g' },
  { name: 'UEDCL Pole Plant', code: 'h' },
  { name: '', code: 'b' }
];
var ROLES = 'https://netlify-integration.com/roles';
const sampleItems = [
  { name: 'hexing meter box', code: 'a' },
  { name: 'hammer stapler for pole saver fire protection fabric', code: 'b' },
  { name: 'ABC end cap', code: 'c' },
  { name: '1/2 Nylon Rope', code: 'd' },
  { name: '1 Way single phase empty box', code: 'e' },
  { name: '1" Nylon Rope', code: 'f' },
  { name: '5.7m multipurpose foldable ladders', code: 'g' },
  { name: '50m tape measure', code: 'h' },
  { name: 'ABC cable', code: 'i' },
  { name: 'ABC end cap', code: 'j' },
  { name: 'ABC strain clamp 10-16mm', code: 'k' },
  { name: 'ABC strain tension clamp', code: 'l' },
  { name: 'ABC suspension clamp', code: 'm' },
  { name: 'adjustable spanner', code: 'n' },
  { name: 'air break switch disconnector', code: 'o' },
  { name: 'auto recloser', code: 'p' },
  { name: 'bolt and nuts', code: 'q' },
  { name: 'bolt cutter', code: 'r' },
  { name: 'bowsaw blade', code: 's' },
  { name: 'cable brackets', code: 't' },
  { name: 'cable saddle', code: 'u' },
  { name: 'cable termination & jointing', code: 'v' },
  { name: 'cable ties', code: 'w' },
  { name: 'climbing irons', code: 'x' },
  { name: 'comm cable connectors', code: 'y' },
  { name: 'communication cable clips', code: 'z' },
  { name: 'concrete poles and subs', code: 'aa' },
  { name: 'conductors', code: 'ab' },
  { name: 'cordless drilling machine', code: 'ac' },
  { name: 'crimping tool', code: 'ad' },
  { name: "CT's", code: 'ae' },
  { name: ' danger sign plate', code: 'af' },
  { name: 'DIN rail', code: 'ag' },
  { name: 'D-Iron', code: 'ah' },
  { name: 'distribution transformer', code: 'ai' },
  { name: 'drop out fuses', code: 'aj' },
  { name: 'earth rod', code: 'ak' },
  { name: 'electricians claw hammer', code: 'al' },
  { name: 'eye bolt and nuts', code: 'am' },
  { name: 'fabricated meter box', code: 'an' },
  { name: 'fall restriction device', code: 'ao' },
  { name: 'feeder pillar', code: 'ap' },
  { name: 'ferrule', code: 'aq' },
  { name: 'filla foam', code: 'ar' },
  { name: 'flexible leather gloves', code: 'as' },
  { name: 'guy grips', code: 'at' },
  { name: 'hacksaw blade', code: 'au' },
  { name: ' hand pallet truck', code: 'av' },
  { name: 'hard hats', code: 'aw' },
  { name: 'heavy pvc pipes', code: 'ax' },
  { name: 'herbicide', code: 'ay' },
  { name: 'hv gloves', code: 'az' },
  { name: 'insulated electricians knife 2 blade', code: 'ba' },
  { name: 'insulating tape', code: 'bb' },
  { name: 'ipc connectors', code: 'bc' },
  { name: 'landing brackets', code: 'bd' },
  { name: 'lugs', code: 'be' },
  { name: 'Lv cables 01', code: 'bf' },
  { name: 'Lv reel insulator', code: 'bg' },
  { name: 'MCBs', code: 'bh' },
  { name: 'MCCBs', code: 'bi' },
  { name: 'meter seals', code: 'bj' },
  { name: 'metering units', code: 'bk' },
  { name: 'mv cables', code: 'bl' },
  { name: 'mv cross arms', code: 'bm' },
  { name: 'nails', code: 'bn' },
  { name: 'neutral blocks', code: 'bo' },
  { name: 'open and ring spanner- 10mm', code: 'bp' },
  { name: 'open, ring or combined ended spanners', code: 'bq' },
  { name: 'optical fibre cable', code: 'br' },
  { name: 'outrigger bracket', code: 'bs' },
  { name: 'padlocks general', code: 'bt' },
  { name: 'pcb safe sign', code: 'bu' },
  { name: 'pg clamps', code: 'bv' },
  { name: 'pig tail bolt and nuts', code: 'bw' },
  { name: 'pig tail coach screw', code: 'bx' },
  { name: 'pin insulator r90', code: 'by' },
  { name: 'pole cap', code: 'bz' },
  { name: 'pole saver', code: 'ca' },
  { name: 'pole top make offs', code: 'cb' },
  { name: 'post polymeric insulators', code: 'cc' },
  { name: 'pre-formed dead ends', code: 'cd' },
  { name: 'prepaid cross arms', code: 'ce' },
  { name: 'rain coats', code: 'cf' },
  { name: 'ready board', code: 'cg' },
  { name: 'safety shoes', code: 'ch' },
  { name: 'screw drivers', code: 'ci' },
  { name: 'self tapping screws', code: 'cj' },
  { name: 'single phase prepayment meters inhemeter', code: 'ck' },
  { name: 'socket thimble', code: 'cl' },
  { name: 'solidal cable clips', code: 'cm' },
  { name: 'spindle 800lbs', code: 'cn' },
  { name: 'spindles', code: 'co' },
  { name: 'splice', code: 'cp' },
  { name: 'stay bracket', code: 'cq' },
  { name: 'stay insulators', code: 'cr' },
  { name: 'stay rods', code: 'cs' },
  { name: 'strain polymeric insulators', code: 'ct' },
  { name: 'struts', code: 'cu' },
  { name: 'surge arresters', code: 'cv' },
  { name: 'thinner white spirit', code: 'cw' },
  { name: 'tower clips', code: 'cx' },
  { name: 'transformer oil', code: 'cy' },
  { name: 'type k fuse links', code: 'cz' },
  { name: 'wall plugs', code: 'da' },
  { name: 'washers', code: 'db' },
  { name: 'earth resistance tester', code: 'dc' },
  { name: '8 inch adjustable wrench', code: 'dd' },
  { name: '12sqmm strapping', code: 'de' },
  { name: 'auger bit ', code: 'df' },
  { name: 'band it strapping tool', code: 'dg' },
  { name: 'buckle straps', code: 'dh' },
  { name: 'pole tags', code: 'di' },
  { name: 'pole stubs wood poles', code: 'dj' },
  { name: 'terminating straps', code: 'dk' },
  { name: 'fabricated x-arms', code: 'dl' }
];
const countries = [
  { name: 'Poles', code: 'pol' },
  { name: 'Safe', code: 'sf' },
  { name: 'Safe', code: 'sfa' },
  { name: 'Safe', code: 'sfb' },
  { name: 'Safe', code: 'sfb' },
  { name: 'Safe', code: 'sbf' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'james', code: 'ES' },
  { name: 'United States', code: 'US' }
];

const itemsList = [
  {
    label: 'Inspection of Materials',
    command: event => {
      toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
    }
  },
  {
    label: 'Reviewing Materials',
    command: event => {
      toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
    }
  },
  {
    label: 'Confirmation of Materials',
    command: event => {
      toast.current.show({
        severity: 'info',
        summary: '3rd Step Confirmation of Materials',
        detail: event.item.label
      });
    }
  },
  {
    label: 'Confirmation of Materials',
    command: event => {
      toast.current.show({ severity: 'info', summary: 'Confirmation of Materials', detail: event.item.label });
    }
  }
];

const tinykey = '1kr7x3llcbt7lt7f2dgo68kbeuepwmqby64fx68bgam3pspi';

export { methods, sampleItems, itemsList, ROLES, sampleInspected, tinykey, warehouseLocation };
