import os

import json
import csv
from pathlib import Path

csv_dir = Path(__file__).parent.joinpath("csv")
assert csv_dir.exists()

jsondir = Path(__file__).parent.joinpath("json")
assert jsondir.exists()

def get_files(base: str, dest: str|None=None) -> tuple[Path,Path]:
    csvfile = csv_dir.joinpath(f"{base}.csv")
    assert csvfile.exists()
    jsonfile = jsondir.joinpath(f"{dest if dest else base}.json")
    if jsonfile.exists():
        os.remove(jsonfile)
    return csvfile,jsonfile

def get_keyname(name: str)->tuple[str,str]:
    clean_name = name.replace("'","").replace(".","").replace("-", " ").replace("&","And")
    keyname = "".join([i.capitalize() for i in clean_name.split(" ")])
    return name, keyname


def ingredients()-> None:
    ingreds = {}
    csvfile, jsonfile = get_files("ingredients")
    with open (csvfile, 'r') as f:
        reader = csv.reader(f)
        # skip header line
        reader.__next__()
        for line in reader:
            name, keyname = get_keyname(line[0])
            abv = float(line[2])
            ingreds[keyname] = {"name": name, "abv": abv}
    with open(jsonfile, 'w+') as f:
        f.write(json.dumps(ingreds))

def preparations()->None:
    prep = {}
    csvfile, jsonfile = get_files("prep", "recipes")
    recipefile, _ = get_files("recipes")

    with open (csvfile, 'r') as prep_file:
        reader = csv.reader(prep_file)
        # skip header line
        reader.__next__()
        for line in reader:
            name, keyname = get_keyname(line[0])
            style = line[1]
            garnish = line[3]
            prep[keyname] = {"name": name, "style": style, "garnish": garnish, "ingredients": []}
            with open(recipefile, 'r') as recipes:
                reader = csv.reader(recipes)
                reader.__next__()
                for entry in reader:
                    _, recipe_keyname = get_keyname(entry[0])
                    if recipe_keyname == keyname:
                        ingredient = entry[1]
                        unit = entry[2]
                        raw_amount = entry[3]
                        amount = float(raw_amount) if "." in raw_amount else int(raw_amount)
                        ingredients =  {"name": ingredient, "unit": unit, "qty": amount}
                        prep[keyname]["ingredients"].append(ingredients)



    with open(jsonfile, 'w+') as output:
        output.write(json.dumps(prep))



if __name__ == "__main__":
    ingredients()
    preparations()