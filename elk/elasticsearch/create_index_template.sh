curl -X PUT "localhost:9200/_index_template/fp-wslogdb?pretty" -H 'Content-Type: application/json' -d'
{
  "index_patterns": ["fp-wslogdb*"],
  "template": {

    "mappings": {

        "_source": {
            "enabled": true
        },

        "properties": {
        "record_number":    { "type": "long" },  
        "source_server_ip":  { "type": "ip"  }, 
        "dt":   { "type": "date"  },

        "bytes_sent":   { "type": "long"  },
        "bytes_received":   { "type": "long"  }, 
        "cat_id":   { "type": "integer"  }, 
        "cat_name":   { "type": "keyword"  },

        "action_id":   { "type": "integer"  },
        "action_name":   { "type": "keyword"  },

        "username":   { "type": "text"  },
        "src_ip":   { "type": "ip"  },
        "dst_ip":   { "type": "ip"  },
        "dst_port":   { "type": "integer"  },
        "domain":   { "type": "text"  },
        "url":   { "type": "text"  },
        "hits":   { "type": "integer"  }
        }

    },

    "aliases": {
      "wslogdb": { }
    }
  },
  "priority": 500,
  "version": 3,
  "_meta": {
    "description": "wslogdb"
  }
}
'
