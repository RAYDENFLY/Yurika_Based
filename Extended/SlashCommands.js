const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = [
  new SlashCommandBuilder()
    .setName('play')
    .setDescription('ayo memutar musik')
    .addStringOption((input) => input.setName('query').setDescription('musik apa yang ingin di putar').setRequired(true)),
  new SlashCommandBuilder()
    .setName('stop')
    .setDescription('menghentikan musik dan menghentikan player'),
  new SlashCommandBuilder()
    .setName('skip')
    .setDescription('lewati lagu'),
  new SlashCommandBuilder()
    .setName('pause')
    .setDescription('menghentikan musik sementara'),
  new SlashCommandBuilder()
    .setName('resume')
    .setDescription('memutar kembali musik'),
    new SlashCommandBuilder()
    .setName('stats')
    .setDescription('melihat status saya'),
];
