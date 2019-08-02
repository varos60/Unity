using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;


public class Gestor_Estado : MonoBehaviour
{        
    public static void Guardar(MonoBehaviour componente)
    {
        //JsonUtility.ToJson(componente);
        //PlayerPrefs.SetString("slot", JsonUtility.ToJson(componente));        
        File.WriteAllText(Application.dataPath + "/DataBase/data.json", JsonUtility.ToJson(componente));
        BinaryFormatter format = new BinaryFormatter();
        FileStream file = File.Open(Application.dataPath + "/DataBase/data.dat", FileMode.OpenOrCreate);
        //Application.persistentDataPath
        Estado estado = componente.GetComponent<Estado>();
        Estado.Estado_Class estado_obj = new Estado.Estado_Class(estado.Nivel, estado.Vidas, estado.inventario, estado.getColor(), estado.prefab.name);
        format.Serialize(file, estado_obj);
        file.Close();
    }

    //public static void Cargar(Estado componente)
    public static void Cargar(MonoBehaviour componente)
    {
        //JsonUtility.FromJsonOverwrite(PlayerPrefs.GetString("slot"), componente);
        //string json = File.ReadAllText(Application.dataPath + "/DataBase/data.json");
        //JsonUtility.FromJsonOverwrite(json, componente);
        Estado.Estado_Class estado;
        //estado = JsonUtility.FromJson<Estado.Estado_Class>(json);
        //componente.SetData(estado);
        BinaryFormatter format = new BinaryFormatter();
        FileStream file = File.Open(Application.dataPath + "/DataBase/data.dat", FileMode.Open);

        estado = (Estado.Estado_Class)format.Deserialize(file);

        componente.GetComponent<Estado>().SetData(estado);

        file.Close();


    }
}
