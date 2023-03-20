'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'sqlite'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be good choice under development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    }
  },

  mysql_217: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST_217', 'localhost'),
      port: Env.get('DB_PORT_217', ''),
      user: Env.get('DB_USER_217', 'root'),
      password: Env.get('DB_PASSWORD_217', ''),
      database: Env.get('DB_DATABASE_217', 'adonis')
    }
  },

  mysql_91: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST_91', 'localhost'),
      port: Env.get('DB_PORT_91', ''),
      user: Env.get('DB_USER_91', 'root'),
      password: Env.get('DB_PASSWORD_91', ''),
      database: Env.get('DB_DATABASE_91', 'adonis')
    }
  },

  // BRANCH CONNECTIONS 

  srsagora_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSAGORA_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSAGORA_MYSQL_PORT', ''),
      user: Env.get('SRSAGORA_MYSQL_USER', 'root'),
      password: Env.get('SRSAGORA_MYSQL_PASSWORD', ''),
      database: Env.get('SRSAGORA_MYSQL_DATABASE', 'adonis')
    }
  },

  srsagora_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSAGORA_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSAGORA_MSSQL_PORT', ''),
      user: Env.get('SRSAGORA_MSSQL_USER', 'root'),
      password: Env.get('SRSAGORA_MSSQL_PASSWORD', ''),
      database: Env.get('SRSAGORA_MSSQL_DATABASE', 'adonis')
    }
  },

  srsal_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSAL_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSAL_MYSQL_PORT', ''),
      user: Env.get('SRSAL_MYSQL_USER', 'root'),
      password: Env.get('SRSAL_MYSQL_PASSWORD', ''),
      database: Env.get('SRSAL_MYSQL_DATABASE', 'adonis')
    }
  },

  srsal_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSAL_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSAL_MSSQL_PORT', ''),
      user: Env.get('SRSAL_MSSQL_USER', 'root'),
      password: Env.get('SRSAL_MSSQL_PASSWORD', ''),
      database: Env.get('SRSAL_MSSQL_DATABASE', 'adonis')
    }
  },

  srsbsl_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSBSL_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSBSL_MYSQL_PORT', ''),
      user: Env.get('SRSBSL_MYSQL_USER', 'root'),
      password: Env.get('SRSBSL_MYSQL_PASSWORD', ''),
      database: Env.get('SRSBSL_MYSQL_DATABASE', 'adonis')
    }
  },

  srsbsl_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSBSL_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSBSL_MSSQL_PORT', ''),
      user: Env.get('SRSBSL_MSSQL_USER', 'root'),
      password: Env.get('SRSBSL_MSSQL_PASSWORD', ''),
      database: Env.get('SRSBSL_MSSQL_DATABASE', 'adonis')
    }
  },

  srsbsl2_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSBSL2_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSBSL2_MYSQL_PORT', ''),
      user: Env.get('SRSBSL2_MYSQL_USER', 'root'),
      password: Env.get('SRSBSL2_MYSQL_PASSWORD', ''),
      database: Env.get('SRSBSL2_MYSQL_DATABASE', 'adonis')
    }
  },

  srsbsl2_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSBSL2_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSBSL2_MSSQL_PORT', ''),
      user: Env.get('SRSBSL2_MSSQL_USER', 'root'),
      password: Env.get('SRSBSL2_MSSQL_PASSWORD', ''),
      database: Env.get('SRSBSL2_MSSQL_DATABASE', 'adonis')
    }
  },

  srsbgb_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSBGB_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSBGB_MYSQL_PORT', ''),
      user: Env.get('SRSBGB_MYSQL_USER', 'root'),
      password: Env.get('SRSBGB_MYSQL_PASSWORD', ''),
      database: Env.get('SRSBGB_MYSQL_DATABASE', 'adonis')
    }
  },

  srsbgb_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSBGB_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSBGB_MSSQL_PORT', ''),
      user: Env.get('SRSBGB_MSSQL_USER', 'root'),
      password: Env.get('SRSBGB_MSSQL_PASSWORD', ''),
      database: Env.get('SRSBGB_MSSQL_DATABASE', 'adonis')
    }
  },

  srsbrixton_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSBRIXTON_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSBRIXTON_MYSQL_PORT', ''),
      user: Env.get('SRSBRIXTON_MYSQL_USER', 'root'),
      password: Env.get('SRSBRIXTON_MYSQL_PASSWORD', ''),
      database: Env.get('SRSBRIXTON_MYSQL_DATABASE', 'adonis')
    }
  },

  srsbrixton_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSBRIXTON_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSBRIXTON_MSSQL_PORT', ''),
      user: Env.get('SRSBRIXTON_MSSQL_USER', 'root'),
      password: Env.get('SRSBRIXTON_MSSQL_PASSWORD', ''),
      database: Env.get('SRSBRIXTON_MSSQL_DATABASE', 'adonis')
    }
  },

  srscain_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSCAIN_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSCAIN_MYSQL_PORT', ''),
      user: Env.get('SRSCAIN_MYSQL_USER', 'root'),
      password: Env.get('SRSCAIN_MYSQL_PASSWORD', ''),
      database: Env.get('SRSCAIN_MYSQL_DATABASE', 'adonis')
    }
  },

  srscain_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSCAIN_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSCAIN_MSSQL_PORT', ''),
      user: Env.get('SRSCAIN_MSSQL_USER', 'root'),
      password: Env.get('SRSCAIN_MSSQL_PASSWORD', ''),
      database: Env.get('SRSCAIN_MSSQL_DATABASE', 'adonis')
    }
  },

  srscain2_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSCAIN2_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSCAIN2_MYSQL_PORT', ''),
      user: Env.get('SRSCAIN2_MYSQL_USER', 'root'),
      password: Env.get('SRSCAIN2_MYSQL_PASSWORD', ''),
      database: Env.get('SRSCAIN2_MYSQL_DATABASE', 'adonis')
    }
  },

  srscain2_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSCAIN2_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSCAIN2_MSSQL_PORT', ''),
      user: Env.get('SRSCAIN2_MSSQL_USER', 'root'),
      password: Env.get('SRSCAIN2_MSSQL_PASSWORD', ''),
      database: Env.get('SRSCAIN2_MSSQL_DATABASE', 'adonis')
    }
  },

  srsc_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSC_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSC_MYSQL_PORT', ''),
      user: Env.get('SRSC_MYSQL_USER', 'root'),
      password: Env.get('SRSC_MYSQL_PASSWORD', ''),
      database: Env.get('SRSC_MYSQL_DATABASE', 'adonis')
    }
  },

  srsc_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSC_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSC_MSSQL_PORT', ''),
      user: Env.get('SRSC_MSSQL_USER', 'root'),
      password: Env.get('SRSC_MSSQL_PASSWORD', ''),
      database: Env.get('SRSC_MSSQL_DATABASE', 'adonis')
    }
  },

  srscom_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSCOM_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSCOM_MYSQL_PORT', ''),
      user: Env.get('SRSCOM_MYSQL_USER', 'root'),
      password: Env.get('SRSCOM_MYSQL_PASSWORD', ''),
      database: Env.get('SRSCOM_MYSQL_DATABASE', 'adonis')
    }
  },

  srscom_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSCOM_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSCOM_MSSQL_PORT', ''),
      user: Env.get('SRSCOM_MSSQL_USER', 'root'),
      password: Env.get('SRSCOM_MSSQL_PASSWORD', ''),
      database: Env.get('SRSCOM_MSSQL_DATABASE', 'adonis')
    }
  },

  srsant2_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSANT2_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSANT2_MYSQL_PORT', ''),
      user: Env.get('SRSANT2_MYSQL_USER', 'root'),
      password: Env.get('SRSANT2_MYSQL_PASSWORD', ''),
      database: Env.get('SRSANT2_MYSQL_DATABASE', 'adonis')
    }
  },

  srsant2_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSANT2_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSANT2_MSSQL_PORT', ''),
      user: Env.get('SRSANT2_MSSQL_USER', 'root'),
      password: Env.get('SRSANT2_MSSQL_PASSWORD', ''),
      database: Env.get('SRSANT2_MSSQL_DATABASE', 'adonis')
    }
  },

  srsg_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSG_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSG_MYSQL_PORT', ''),
      user: Env.get('SRSG_MYSQL_USER', 'root'),
      password: Env.get('SRSG_MYSQL_PASSWORD', ''),
      database: Env.get('SRSG_MYSQL_DATABASE', 'adonis')
    }
  },

  srsg_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSG_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSG_MSSQL_PORT', ''),
      user: Env.get('SRSG_MSSQL_USER', 'root'),
      password: Env.get('SRSG_MSSQL_PASSWORD', ''),
      database: Env.get('SRSG_MSSQL_DATABASE', 'adonis')
    }
  },

  srsant1_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSANT1_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSANT1_MYSQL_PORT', ''),
      user: Env.get('SRSANT1_MYSQL_USER', 'root'),
      password: Env.get('SRSANT1_MYSQL_PASSWORD', ''),
      database: Env.get('SRSANT1_MYSQL_DATABASE', 'adonis')
    }
  },

  srsant1_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSANT1_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSANT1_MSSQL_PORT', ''),
      user: Env.get('SRSANT1_MSSQL_USER', 'root'),
      password: Env.get('SRSANT1_MSSQL_PASSWORD', ''),
      database: Env.get('SRSANT1_MSSQL_DATABASE', 'adonis')
    }
  },

  srsgv_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSGV_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSGV_MYSQL_PORT', ''),
      user: Env.get('SRSGV_MYSQL_USER', 'root'),
      password: Env.get('SRSGV_MYSQL_PASSWORD', ''),
      database: Env.get('SRSGV_MYSQL_DATABASE', 'adonis')
    }
  },

  srsgv_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSGV_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSGV_MSSQL_PORT', ''),
      user: Env.get('SRSGV_MSSQL_USER', 'root'),
      password: Env.get('SRSGV_MSSQL_PASSWORD', ''),
      database: Env.get('SRSGV_MSSQL_DATABASE', 'adonis')
    }
  },

  sri_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRI_MYSQL_HOST', 'localhost'),
      port: Env.get('SRI_MYSQL_PORT', ''),
      user: Env.get('SRI_MYSQL_USER', 'root'),
      password: Env.get('SRI_MYSQL_PASSWORD', ''),
      database: Env.get('SRI_MYSQL_DATABASE', 'adonis')
    }
  },

  sri_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRI_MSSQL_HOST', 'localhost'),
      port: Env.get('SRI_MSSQL_PORT', ''),
      user: Env.get('SRI_MSSQL_USER', 'root'),
      password: Env.get('SRI_MSSQL_PASSWORD', ''),
      database: Env.get('SRI_MSSQL_DATABASE', 'adonis')
    }
  },

  srstu_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSTU_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSTU_MYSQL_PORT', ''),
      user: Env.get('SRSTU_MYSQL_USER', 'root'),
      password: Env.get('SRSTU_MYSQL_PASSWORD', ''),
      database: Env.get('SRSTU_MYSQL_DATABASE', 'adonis')
    }
  },

  srstu_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSTU_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSTU_MSSQL_PORT', ''),
      user: Env.get('SRSTU_MSSQL_USER', 'root'),
      password: Env.get('SRSTU_MSSQL_PASSWORD', ''),
      database: Env.get('SRSTU_MSSQL_DATABASE', 'adonis')
    }
  },

  srsm_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSM_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSM_MYSQL_PORT', ''),
      user: Env.get('SRSM_MYSQL_USER', 'root'),
      password: Env.get('SRSM_MYSQL_PASSWORD', ''),
      database: Env.get('SRSM_MYSQL_DATABASE', 'adonis')
    }
  },

  srsm_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSM_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSM_MSSQL_PORT', ''),
      user: Env.get('SRSM_MSSQL_USER', 'root'),
      password: Env.get('SRSM_MSSQL_PASSWORD', ''),
      database: Env.get('SRSM_MSSQL_DATABASE', 'adonis')
    }
  },

  srsman_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSMAN_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSMAN_MYSQL_PORT', ''),
      user: Env.get('SRSMAN_MYSQL_USER', 'root'),
      password: Env.get('SRSMAN_MYSQL_PASSWORD', ''),
      database: Env.get('SRSMAN_MYSQL_DATABASE', 'adonis')
    }
  },

  srsman_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSMAN_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSMAN_MSSQL_PORT', ''),
      user: Env.get('SRSMAN_MSSQL_USER', 'root'),
      password: Env.get('SRSMAN_MSSQL_PASSWORD', ''),
      database: Env.get('SRSMAN_MSSQL_DATABASE', 'adonis')
    }
  },

  srsmar_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSMAR_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSMAR_MYSQL_PORT', ''),
      user: Env.get('SRSMAR_MYSQL_USER', 'root'),
      password: Env.get('SRSMAR_MYSQL_PASSWORD', ''),
      database: Env.get('SRSMAR_MYSQL_DATABASE', 'adonis')
    }
  },

  srsmar_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSMAR_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSMAR_MSSQL_PORT', ''),
      user: Env.get('SRSMAR_MSSQL_USER', 'root'),
      password: Env.get('SRSMAR_MSSQL_PASSWORD', ''),
      database: Env.get('SRSMAR_MSSQL_DATABASE', 'adonis')
    }
  },

  srsmol_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSMOL_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSMOL_MYSQL_PORT', ''),
      user: Env.get('SRSMOL_MYSQL_USER', 'root'),
      password: Env.get('SRSMOL_MYSQL_PASSWORD', ''),
      database: Env.get('SRSMOL_MYSQL_DATABASE', 'adonis')
    }
  },

  srsmol_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSMOL_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSMOL_MSSQL_PORT', ''),
      user: Env.get('SRSMOL_MSSQL_USER', 'root'),
      password: Env.get('SRSMOL_MSSQL_PASSWORD', ''),
      database: Env.get('SRSMOL_MSSQL_DATABASE', 'adonis')
    }
  },

  srsmon_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSMON_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSMON_MYSQL_PORT', ''),
      user: Env.get('SRSMON_MYSQL_USER', 'root'),
      password: Env.get('SRSMON_MYSQL_PASSWORD', ''),
      database: Env.get('SRSMON_MYSQL_DATABASE', 'adonis')
    }
  },

  srsmon_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSMON_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSMON_MSSQL_PORT', ''),
      user: Env.get('SRSMON_MSSQL_USER', 'root'),
      password: Env.get('SRSMON_MSSQL_PASSWORD', ''),
      database: Env.get('SRSMON_MSSQL_DATABASE', 'adonis')
    }
  },

  srsnav_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSNAV_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSNAV_MYSQL_PORT', ''),
      user: Env.get('SRSNAV_MYSQL_USER', 'root'),
      password: Env.get('SRSNAV_MYSQL_PASSWORD', ''),
      database: Env.get('SRSNAV_MYSQL_DATABASE', 'adonis')
    }
  },

  srsnav_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSNAV_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSNAV_MSSQL_PORT', ''),
      user: Env.get('SRSNAV_MSSQL_USER', 'root'),
      password: Env.get('SRSNAV_MSSQL_PASSWORD', ''),
      database: Env.get('SRSNAV_MSSQL_DATABASE', 'adonis')
    }
  },

  srsn_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSN_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSN_MYSQL_PORT', ''),
      user: Env.get('SRSN_MYSQL_USER', 'root'),
      password: Env.get('SRSN_MYSQL_PASSWORD', ''),
      database: Env.get('SRSN_MYSQL_DATABASE', 'adonis')
    }
  },

  srsn_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSN_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSN_MSSQL_PORT', ''),
      user: Env.get('SRSN_MSSQL_USER', 'root'),
      password: Env.get('SRSN_MSSQL_PASSWORD', ''),
      database: Env.get('SRSN_MSSQL_DATABASE', 'adonis')
    }
  },

  srspat_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSPAT_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSPAT_MYSQL_PORT', ''),
      user: Env.get('SRSPAT_MYSQL_USER', 'root'),
      password: Env.get('SRSPAT_MYSQL_PASSWORD', ''),
      database: Env.get('SRSPAT_MYSQL_DATABASE', 'adonis')
    }
  },

  srspat_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSPAT_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSPAT_MSSQL_PORT', ''),
      user: Env.get('SRSPAT_MSSQL_USER', 'root'),
      password: Env.get('SRSPAT_MSSQL_PASSWORD', ''),
      database: Env.get('SRSPAT_MSSQL_DATABASE', 'adonis')
    }
  },

  srspun_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSPUN_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSPUN_MYSQL_PORT', ''),
      user: Env.get('SRSPUN_MYSQL_USER', 'root'),
      password: Env.get('SRSPUN_MYSQL_PASSWORD', ''),
      database: Env.get('SRSPUN_MYSQL_DATABASE', 'adonis')
    }
  },

  srspun_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSPUN_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSPUN_MSSQL_PORT', ''),
      user: Env.get('SRSPUN_MSSQL_USER', 'root'),
      password: Env.get('SRSPUN_MSSQL_PASSWORD', ''),
      database: Env.get('SRSPUN_MSSQL_DATABASE', 'adonis')
    }
  },

  srsrosario_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSROSARIO_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSROSARIO_MYSQL_PORT', ''),
      user: Env.get('SRSROSARIO_MYSQL_USER', 'root'),
      password: Env.get('SRSROSARIO_MYSQL_PASSWORD', ''),
      database: Env.get('SRSROSARIO_MYSQL_DATABASE', 'adonis')
    }
  },

  srsrosario_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSROSARIO_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSROSARIO_MSSQL_PORT', ''),
      user: Env.get('SRSROSARIO_MSSQL_USER', 'root'),
      password: Env.get('SRSROSARIO_MSSQL_PASSWORD', ''),
      database: Env.get('SRSROSARIO_MSSQL_DATABASE', 'adonis')
    }
  },

  srsisidro_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSISIDRO_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSISIDRO_MYSQL_PORT', ''),
      user: Env.get('SRSISIDRO_MYSQL_USER', 'root'),
      password: Env.get('SRSISIDRO_MYSQL_PASSWORD', ''),
      database: Env.get('SRSISIDRO_MYSQL_DATABASE', 'adonis')
    }
  },

  srsisidro_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSISIDRO_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSISIDRO_MSSQL_PORT', ''),
      user: Env.get('SRSISIDRO_MSSQL_USER', 'root'),
      password: Env.get('SRSISIDRO_MSSQL_PASSWORD', ''),
      database: Env.get('SRSISIDRO_MSSQL_DATABASE', 'adonis')
    }
  },

  srssanp_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSSANP_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSSANP_MYSQL_PORT', ''),
      user: Env.get('SRSSANP_MYSQL_USER', 'root'),
      password: Env.get('SRSSANP_MYSQL_PASSWORD', ''),
      database: Env.get('SRSSANP_MYSQL_DATABASE', 'adonis')
    }
  },

  srssanp_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSSANP_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSSANP_MSSQL_PORT', ''),
      user: Env.get('SRSSANP_MSSQL_USER', 'root'),
      password: Env.get('SRSSANP_MSSQL_PASSWORD', ''),
      database: Env.get('SRSSANP_MSSQL_DATABASE', 'adonis')
    }
  },

  srspalay_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSPALAY_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSPALAY_MYSQL_PORT', ''),
      user: Env.get('SRSPALAY_MYSQL_USER', 'root'),
      password: Env.get('SRSPALAY_MYSQL_PASSWORD', ''),
      database: Env.get('SRSPALAY_MYSQL_DATABASE', 'adonis')
    }
  },

  srspalay_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSPALAY_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSPALAY_MSSQL_PORT', ''),
      user: Env.get('SRSPALAY_MSSQL_USER', 'root'),
      password: Env.get('SRSPALAY_MSSQL_PASSWORD', ''),
      database: Env.get('SRSPALAY_MSSQL_DATABASE', 'adonis')
    }
  },

  srsstamaria_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSSTAMARIA_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSSTAMARIA_MYSQL_PORT', ''),
      user: Env.get('SRSSTAMARIA_MYSQL_USER', 'root'),
      password: Env.get('SRSSTAMARIA_MYSQL_PASSWORD', ''),
      database: Env.get('SRSSTAMARIA_MYSQL_DATABASE', 'adonis')
    }
  },

  srsstamaria_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSSTAMARIA_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSSTAMARIA_MSSQL_PORT', ''),
      user: Env.get('SRSSTAMARIA_MSSQL_USER', 'root'),
      password: Env.get('SRSSTAMARIA_MSSQL_PASSWORD', ''),
      database: Env.get('SRSSTAMARIA_MSSQL_DATABASE', 'adonis')
    }
  },

  srsstarosa_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSSTAROSA_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSSTAROSA_MYSQL_PORT', ''),
      user: Env.get('SRSSTAROSA_MYSQL_USER', 'root'),
      password: Env.get('SRSSTAROSA_MYSQL_PASSWORD', ''),
      database: Env.get('SRSSTAROSA_MYSQL_DATABASE', 'adonis')
    }
  },

  srsstarosa_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSSTAROSA_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSSTAROSA_MSSQL_PORT', ''),
      user: Env.get('SRSSTAROSA_MSSQL_USER', 'root'),
      password: Env.get('SRSSTAROSA_MSSQL_PASSWORD', ''),
      database: Env.get('SRSSTAROSA_MSSQL_DATABASE', 'adonis')
    }
  },

  srstanza_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSTANZA_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSTANZA_MYSQL_PORT', ''),
      user: Env.get('SRSTANZA_MYSQL_USER', 'root'),
      password: Env.get('SRSTANZA_MYSQL_PASSWORD', ''),
      database: Env.get('SRSTANZA_MYSQL_DATABASE', 'adonis')
    }
  },

  srstanza_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSTANZA_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSTANZA_MSSQL_PORT', ''),
      user: Env.get('SRSTANZA_MSSQL_USER', 'root'),
      password: Env.get('SRSTANZA_MSSQL_PASSWORD', ''),
      database: Env.get('SRSTANZA_MSSQL_DATABASE', 'adonis')
    }
  },

  srst_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRST_MYSQL_HOST', 'localhost'),
      port: Env.get('SRST_MYSQL_PORT', ''),
      user: Env.get('SRST_MYSQL_USER', 'root'),
      password: Env.get('SRST_MYSQL_PASSWORD', ''),
      database: Env.get('SRST_MYSQL_DATABASE', 'adonis')
    }
  },

  srst_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRST_MSSQL_HOST', 'localhost'),
      port: Env.get('SRST_MSSQL_PORT', ''),
      user: Env.get('SRST_MSSQL_USER', 'root'),
      password: Env.get('SRST_MSSQL_PASSWORD', ''),
      database: Env.get('SRST_MSSQL_DATABASE', 'adonis')
    }
  },

  srsval_mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('SRSVAL_MYSQL_HOST', 'localhost'),
      port: Env.get('SRSVAL_MYSQL_PORT', ''),
      user: Env.get('SRSVAL_MYSQL_USER', 'root'),
      password: Env.get('SRSVAL_MYSQL_PASSWORD', ''),
      database: Env.get('SRSVAL_MYSQL_DATABASE', 'adonis')
    }
  },

  srsval_mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('SRSVAL_MSSQL_HOST', 'localhost'),
      port: Env.get('SRSVAL_MSSQL_PORT', ''),
      user: Env.get('SRSVAL_MSSQL_USER', 'root'),
      password: Env.get('SRSVAL_MSSQL_PASSWORD', ''),
      database: Env.get('SRSVAL_MSSQL_DATABASE', 'adonis')
    }
  },

}
