DROP DATABASE IF EXISTS orchids_db;
CREATE DATABASE IF NOT EXISTS orchids_db;
USE orchids_db;

DROP TABLE IF EXISTS genus;
CREATE TABLE genus (
    id INT PRIMARY KEY,
    description VARCHAR(100) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS types;
CREATE TABLE types (
    id INT PRIMARY KEY,
    description VARCHAR(100) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS luminosity;
CREATE TABLE luminosity (
    id INT PRIMARY KEY,
    description VARCHAR(100) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS temperature;
CREATE TABLE temperature (
    id INT PRIMARY KEY,
    description VARCHAR(100) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS humidity;
CREATE TABLE humidity (
    id INT PRIMARY KEY,
    description VARCHAR(100) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS sizes;
CREATE TABLE sizes (
    id INT PRIMARY KEY,
    description VARCHAR(100) NOT NULL UNIQUE
);


-- Criação da tabela principal de Orquídeas
DROP TABLE IF EXISTS orchid;
CREATE TABLE orchid (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL UNIQUE, -- Unicidade exigida no enunciado 
    genus_id INT NOT NULL,
    types_id INT NOT NULL,
    luminosity_id INT NOT NULL,
    temperature_id INT NOT NULL,
    humidity_id INT NOT NULL,
    sizes_id INT NOT NULL,
    src VARCHAR(255), -- Caminho da imagem original
    thumbnail_src VARCHAR(255), -- Caminho do thumbnail [cite: 45]
    
    -- Definição das Relações (Foreign Keys) 
    CONSTRAINT fk_genus FOREIGN KEY (genus_id) REFERENCES genus(id),
    CONSTRAINT fk_types FOREIGN KEY (types_id) REFERENCES types(id),
    CONSTRAINT fk_luminosity FOREIGN KEY (luminosity_id) REFERENCES luminosity(id),
    CONSTRAINT fk_temperature FOREIGN KEY (temperature_id) REFERENCES temperature(id),
    CONSTRAINT fk_humidity FOREIGN KEY (humidity_id) REFERENCES humidity(id),
    CONSTRAINT fk_sizes FOREIGN KEY (sizes_id) REFERENCES sizes(id)
);

-- Criação de Índices para otimizar a filtragem por características 
CREATE INDEX idx_orchid_genus ON orchid(genus_id);
CREATE INDEX idx_orchid_types ON orchid(types_id);
CREATE INDEX idx_orchid_luminosity ON orchid(luminosity_id);