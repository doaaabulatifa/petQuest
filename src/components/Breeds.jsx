export default function Breeds() {
  return (
    <select
      className="input border rounded-lg border-black p-2"
      name="breed"
      required
    >
      <optgroup label="Cat">
        <option value="Abyssinian">Abyssinian</option>
        <option value="Bengal">Bengal</option>
        <option value="British Shorthair">British Shorthair</option>
        <option value="Maine Coon">Maine Coon</option>
        <option value="Persian">Persian</option>
        <option value="Ragdoll">Ragdoll</option>
        <option value="Siamese">Siamese</option>
        <option value="Sphynx">Sphynx</option>
      </optgroup>

      <optgroup label="Dog">
        <option value="Beagle">Beagle</option>
        <option value="Bulldog">Bulldog</option>
        <option value="Dachshund">Dachshund</option>
        <option value="German Shepherd">German Shepherd</option>
        <option value="Golden Retriever">Golden Retriever</option>
        <option value="Labrador Retriever">Labrador Retriever</option>
        <option value="Poodle">Poodle</option>
        <option value="Yorkshire Terrier">Yorkshire Terrier</option>
      </optgroup>

      <optgroup label="Rabbit">
        <option value="Dutch">Dutch</option>
        <option value="English Lop">English Lop</option>
        <option value="Flemish Giant">Flemish Giant</option>
        <option value="Holland Lop">Holland Lop</option>
        <option value="Lionhead">Lionhead</option>
        <option value="Mini Rex">Mini Rex</option>
        <option value="Netherland Dwarf">Netherland Dwarf</option>
        <option value="Rex">Rex</option>
      </optgroup>

      <optgroup label="Hamster">
        <option value="Chinese Hamster">Chinese Hamster</option>
        <option value="Dwarf Campbell Russian Hamster">
          Dwarf Campbell Russian Hamster
        </option>
        <option value="Dwarf Winter White Russian Hamster">
          Dwarf Winter White Russian Hamster
        </option>
        <option value="Roborovski Hamster">Roborovski Hamster</option>
        <option value="Syrian Hamster">Syrian Hamster</option>
      </optgroup>

      <optgroup label="Guinea Pig">
        {" "}
        <option value="Abyssinian">Abyssinian</option>
        <option value="American">American</option>
        <option value="Peruvian">Peruvian</option>
        <option value="Silkie">Silkie</option>
        <option value="Teddy">Teddy</option>
        <option value="Texel">Texel</option>
        <option value="White Crested">White Crested</option>
      </optgroup>

      <optgroup label="Ferret">
        <option value="Albino Ferret">Albino Ferret</option>
        <option value="Black Sable Ferret">Black Sable Ferret</option>
        <option value="Chocolate Ferret">Chocolate Ferret</option>
        <option value="Sable Ferret">Sable Ferret</option>
        <option value="Silver Ferret">Silver Ferret</option>
      </optgroup>

      <optgroup label="Bird">
        {" "}
        <option value="Budgerigar">Budgerigar</option>
        <option value="Canary">Canary</option>
        <option value="Cockatiel">Cockatiel</option>
        <option value="Cockatoo">Cockatoo</option>
        <option value="Finch">Finch</option>
        <option value="Lovebird">Lovebird</option>
        <option value="Macaw">Macaw</option>
        <option value="Parakeet">Parakeet</option>
      </optgroup>

      <optgroup label="Fish">
        <option value="Betta">Betta</option>
        <option value="Goldfish">Goldfish</option>
        <option value="Guppy">Guppy</option>
        <option value="Molly">Molly</option>
        <option value="Neon Tetra">Neon Tetra</option>
        <option value="Oscar">Oscar</option>
        <option value="Platy">Platy</option>
        <option value="Swordtail">Swordtail</option>
      </optgroup>
      <optgroup label="Turtle">
        <option value="Box Turtle">Box Turtle</option>
        <option value="Loggerhead Turtle">Loggerhead Turtle</option>
        <option value="Map Turtle">Map Turtle</option>
        <option value="Painted Turtle">Painted Turtle</option>
        <option value="Red-Eared Slider">Red-Eared Slider</option>
        <option value="Snapping Turtle">Snapping Turtle</option>
        <option value="Spotted Turtle">Spotted Turtle</option>
        <option value="Wood Turtle">Wood Turtle</option>
      </optgroup>
      <optgroup label="Lizard">
        <option value="Bearded Dragon">Bearded Dragon</option>
        <option value="Chameleon">Chameleon</option>
        <option value="Gecko">Gecko</option>
        <option value="Iguana">Iguana</option>
        <option value="Monitor Lizard">Monitor Lizard</option>
        <option value="Skink">Skink</option>
        <option value="Uromastyx">Uromastyx</option>
        <option value="Water Dragon">Water Dragon</option>
      </optgroup>
      <optgroup label="Snake">
        <option value="Ball Python">Ball Python</option>
        <option value="Boa Constrictor">Boa Constrictor</option>
        <option value="Corn Snake">Corn Snake</option>
        <option value="Garter Snake">Garter Snake</option>
        <option value="King Snake">King Snake</option>
        <option value="Milk Snake">Milk Snake</option>
        <option value="Rat Snake">Rat Snake</option>
        <option value="Rosy Boa">Rosy Boa</option>
      </optgroup>
      <optgroup label="Frog">
        <option value="American Green Tree Frog">
          American Green Tree Frog
        </option>
        <option value="Dart Frog">Dart Frog</option>
        <option value="Leopard Frog">Leopard Frog</option>
        <option value="Pacman Frog">Pacman Frog</option>
        <option value="Pixie Frog">Pixie Frog</option>
        <option value="Red-Eyed Tree Frog">Red-Eyed Tree Frog</option>
        <option value="White's Tree Frog">White's Tree Frog</option>
        <option value="Wood Frog">Wood Frog</option>
      </optgroup>
      <optgroup label="Horse">
        <option value="Arabian Horse">Arabian Horse</option>
        <option value="Clydesdale">Clydesdale</option>
        <option value="Friesian Horse">Friesian Horse</option>
        <option value="Morgan Horse">Morgan Horse</option>
        <option value="Paint Horse">Paint Horse</option>
        <option value="Quarter Horse">Quarter Horse</option>
        <option value="Shetland Pony">Shetland Pony</option>
        <option value="Thoroughbred">Thoroughbred</option>
      </optgroup>
      <optgroup label="Pig">
        <option value="American Yorkshire">American Yorkshire</option>
        <option value="Berkshire">Berkshire</option>
        <option value="Duroc">Duroc</option>
        <option value="Hampshire">Hampshire</option>
        <option value="Hereford">Hereford</option>
        <option value="Landrace">Landrace</option>
        <option value="Potbelly Pig">Potbelly Pig</option>
        <option value="Tamworth">Tamworth</option>
      </optgroup>
      <optgroup label="Goat">
        <option value="Alpine">Alpine</option>
        <option value="Angora">Angora</option>
        <option value="Boer">Boer</option>
        <option value="Kiko">Kiko</option>
        <option value="LaMancha">LaMancha</option>
        <option value="Nigerian Dwarf">Nigerian Dwarf</option>
        <option value="Nubian">Nubian</option>
        <option value="Pygmy">Pygmy</option>
      </optgroup>
      <optgroup label="Chicken">
        <option value="Ameraucana">Ameraucana</option>
        <option value="Australorp">Australorp</option>
        <option value="Brahma">Brahma</option>
        <option value="Cochin">Cochin</option>
        <option value="Leghorn">Leghorn</option>
        <option value="Orpington">Orpington</option>
        <option value="Plymouth Rock">Plymouth Rock</option>
        <option value="Rhode Island Red">Rhode Island Red</option>
      </optgroup>
      <optgroup label="Duck">
        <option value="Cayuga">Cayuga</option>
        <option value="Indian Runner">Indian Runner</option>
        <option value="Khaki Campbell">Khaki Campbell</option>
        <option value="Mallard">Mallard</option>
        <option value="Muscovy">Muscovy</option>
        <option value="Pekin">Pekin</option>
        <option value="Rouen">Rouen</option>
        <option value="Swedish">Swedish</option>
      </optgroup>
      <optgroup label="Chinchilla">
        <option value="Standard Chinchilla">Standard Chinchilla</option>
        <option value="Black Velvet Chinchilla">Black Velvet Chinchilla</option>
        <option value="White Chinchilla">White Chinchilla</option>
        <option value="Beige Chinchilla">Beige Chinchilla</option>
        <option value="Brown Velvet Chinchilla">Brown Velvet Chinchilla</option>
        <option value="Mosaic Chinchilla">Mosaic Chinchilla</option>
        <option value="Sapphire Chinchilla">Sapphire Chinchilla</option>
        <option value="Violet Chinchilla">Violet Chinchilla</option>
      </optgroup>
      <optgroup label="Gerbil">
        <option value="Agouti Gerbil">Agouti Gerbil</option>
        <option value="Agouti Gerbil">Agouti Gerbil</option>
        <option value="Black Gerbil">Black Gerbil</option>
        <option value="Burmese Gerbil">Burmese Gerbil</option>
        <option value="Lilac Gerbil">Lilac Gerbil</option>
        <option value="Pied Gerbil">Pied Gerbil</option>
        <option value="Siamese Gerbil">Siamese Gerbil</option>
        <option value="Slate Gerbil">Slate Gerbil</option>
        <option value="White Gerbil">White Gerbil</option>
      </optgroup>
      <optgroup label="Hedgehog">
        <option value="African Pygmy Hedgehog">African Pygmy Hedgehog</option>
        <option value="Algerian Hedgehog">Algerian Hedgehog</option>
        <option value="Egyptian Long-Eared Hedgehog">
          Egyptian Long-Eared Hedgehog
        </option>
        <option value="Four-Toed Hedgehog">Four-Toed Hedgehog</option>
        <option value="Indian Long-Eared Hedgehog">
          Indian Long-Eared Hedgehog
        </option>
        <option value="Somali Hedgehog">Somali Hedgehog</option>
        <option value="South African Hedgehog">South African Hedgehog</option>
        <option value="Southern African Hedgehog">
          Southern African Hedgehog
        </option>
      </optgroup>
    </select>
  );
}
