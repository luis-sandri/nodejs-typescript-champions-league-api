import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";

const dataBase: PlayerModel[] = [
    {
        id: 1,
        name: "Trent Alexander-Arnold",
        club: "Liverpool",
        nationality: "England",
        position: "Defender",
        statistics: {
            Overall: 87,
            Pace: 84,
            Shooting: 70,
            Passing: 86,
            Dribbling: 82,
            Defending: 85,
            Physical: 77,
        }
    },
    {
        id: 2,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 89,
            Pace: 77,
            Shooting: 60,
            Passing: 71,
            Dribbling: 72,
            Defending: 91,
            Physical: 86,
        }
    },
    {
        id: 3,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 74,
            Shooting: 88,
            Passing: 94,
            Dribbling: 87,
            Defending: 64,
            Physical: 78,
        }
    },
    {
        id: 4,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 89,
            Shooting: 94,
            Passing: 65,
            Dribbling: 80,
            Defending: 45,
            Physical: 88,
        }
    },
    {
        id: 5,
        name: "Bukayo Saka",
        club: "Arsenal",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 86,
            Pace: 85,
            Shooting: 82,
            Passing: 81,
            Dribbling: 88,
            Defending: 60,
            Physical: 72,
        }
    },
    {
        id: 6,
        name: "Martin Ødegaard",
        club: "Arsenal",
        nationality: "Norway",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 76,
            Shooting: 81,
            Passing: 88,
            Dribbling: 86,
            Defending: 62,
            Physical: 70,
        }
    },
    {
        id: 7,
        name: "Bruno Fernandes",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 75,
            Shooting: 85,
            Passing: 89,
            Dribbling: 83,
            Defending: 68,
            Physical: 77,
        }
    },
    {
        id: 8,
        name: "Marcus Rashford",
        club: "Manchester United",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 85,
            Pace: 91,
            Shooting: 83,
            Passing: 78,
            Dribbling: 85,
            Defending: 45,
            Physical: 74,
        }
    },
    {
        id: 9,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 90,
            Shooting: 89,
            Passing: 82,
            Dribbling: 90,
            Defending: 49,
            Physical: 75,
        }
    },
    {
        id: 10,
        name: "Son Heung-min",
        club: "Tottenham",
        nationality: "South Korea",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 88,
            Shooting: 90,
            Passing: 80,
            Dribbling: 86,
            Defending: 48,
            Physical: 74,
        }
    },
    {
        id: 11,
        name: "Harry Kane",
        club: "Bayern Munich",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 70,
            Shooting: 93,
            Passing: 84,
            Dribbling: 82,
            Defending: 50,
            Physical: 83,
        }
    },
    {
        id: 12,
        name: "Rodri",
        club: "Manchester City",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 66,
            Shooting: 78,
            Passing: 86,
            Dribbling: 80,
            Defending: 86,
            Physical: 84,
        }
    },
    {
        id: 13,
        name: "Bernardo Silva",
        club: "Manchester City",
        nationality: "Portugal",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 79,
            Shooting: 80,
            Passing: 85,
            Dribbling: 92,
            Defending: 70,
            Physical: 68,
        }
    },
    {
        id: 14,
        name: "Declan Rice",
        club: "Arsenal",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 73,
            Shooting: 75,
            Passing: 82,
            Dribbling: 78,
            Defending: 86,
            Physical: 85,
        }
    },
    {
        id: 15,
        name: "Reece James",
        club: "Chelsea",
        nationality: "England",
        position: "Defender",
        statistics: {
            Overall: 84,
            Pace: 82,
            Shooting: 70,
            Passing: 80,
            Dribbling: 78,
            Defending: 83,
            Physical: 84,
        }
    },
    {
        id: 16,
        name: "Enzo Fernández",
        club: "Chelsea",
        nationality: "Argentina",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 72,
            Shooting: 74,
            Passing: 86,
            Dribbling: 83,
            Defending: 75,
            Physical: 78,
        }
    },
    {
        id: 17,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 80,
            Shooting: 92,
            Passing: 78,
            Dribbling: 85,
            Defending: 40,
            Physical: 83,
        }
    },
    {
        id: 18,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 78,
            Shooting: 89,
            Passing: 91,
            Dribbling: 94,
            Defending: 38,
            Physical: 65,
        }
    },
    {
        id: 19,
        name: "Neymar Jr",
        club: "Al Hilal",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 87,
            Shooting: 85,
            Passing: 86,
            Dribbling: 93,
            Defending: 42,
            Physical: 68,
        }
    },
    {
        id: 20,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 90,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 78,
        }
    },

];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataBase.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    dataBase.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = dataBase.findIndex( player => player.id === id);
    if(index !== -1){
        dataBase.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

export const findAndModifyPlayer = async (id: number, statistics: statisticsModel): Promise<PlayerModel> => {
    const playerIndex = dataBase.findIndex(player => player.id === id);
    if(playerIndex !== -1){
        dataBase[playerIndex].statistics = statistics;
    }
    return dataBase[playerIndex];
}