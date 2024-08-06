import { REST, Routes } from 'discord.js';
const client_id = import.meta.env.CLIENT_ID

const commands = [
    {
      name: 'Create new',
      description: 'Create new short URL',
    },
  ];

  const rest = new REST({ version: '10' }).setToken(client_id);

  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1270468373553348671'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }