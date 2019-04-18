using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PickUp_Controller : MonoBehaviour {

    public GameObject pickup_object;
    private GameObject player;
    public float spawn_distance;
    public float spawnSeconds;
    private float startTime;
    private float actualSeconds = 0.0f;

    // Use this for initialization
    void Start() {
        startTime = Time.time;
        player = GameObject.FindWithTag("Player");
        Create_PickUp_Object();
    }

    // Update is called once per frame
    void FixedUpdate() {
        Create_PickUp_Object();
        CountTime();
    }

    void Create_PickUp_Object()        
    {
        if (Timer())
        {
            Vector3 pick_up_position = new Vector3(Random.Range(-8.5f, 8.5f), 0.6f, Random.Range(-8.5f, 8.5f));

            if (player.transform.position.x - pick_up_position.x > spawn_distance || player.transform.position.x - pick_up_position.x < (spawn_distance * -1) || player.transform.position.z - pick_up_position.z > spawn_distance || player.transform.position.z - pick_up_position.z < (spawn_distance * -1))
            {
                GameObject new_pickup_object = Instantiate(pickup_object, pick_up_position, Quaternion.identity);
                new_pickup_object.transform.parent = gameObject.transform;
                //Debug.Log("Log: Creado");
            }
        }
    }

    void CountTime()
    {
        float minutes = (int)((Time.time - startTime) / 60f);
        float seconds = (int)((Time.time - startTime) % 60f);
        //Debug.Log("Log:" + minutes.ToString("00") + ":" + seconds.ToString("00"));        
    }

    bool Timer() {
        actualSeconds += Time.deltaTime;        
        if ((actualSeconds%60) >= spawnSeconds) {
            actualSeconds = 0.0f;            
            return true;
        }
        else
        {
            return false;
        }
    }

}
